import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { red, whiteBright } from 'chalk';
import { toBoolean } from '../utils/convert';
import importModels, { SuperModel } from '../models';

//Init .env
dotenv.config();

const { DB_MS, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS, SQL_DEBUG, SEQUELIZE_SYNC } = process.env;
const { log, error } = console;

const URI = `${DB_MS}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sqlDebug = toBoolean(SQL_DEBUG) ? log : false;

export enum SyncTypes {
    DEFAULT,
    ALTER,
    FORCE
}

export type SyncTypesStrings = keyof typeof SyncTypes;

export default class Database {

    public sequelize: Sequelize = new Sequelize(URI, {
        logging: sqlDebug,
        define: {
            freezeTableName: true
        }
    });    

    private Models!: (typeof SuperModel)[]

    public async connect(synchronize: boolean = true) {
        //log(`[Sequelize] URI do banco = ${URI}`);
        //log(`[Sequelize] Conectando-se. . .`);

        try {
            //Testing connection. . .
            await this.sequelize.authenticate();
            //log(`${whiteBright('[Sequelize] Conexão realizada com sucesso!')}`);

            this.initModels()
            
            if (synchronize)
                await this.sync()
                .then(() => this.associateModels())
                .then(() => this.populateModels());

        } catch (exception) {
            error(`${red('[Sequelize] Erro ao conectar-se ao banco de dados: ')}`);
            error(`${red(exception.stack)}`);
        }
    };

    public async disconnect() {
        await this.sequelize.close();
    }

    private async sync() {
        //log('[Sequelize] Sincronizando. . .');
        try {
            const syncType = SyncTypes[<SyncTypesStrings>SEQUELIZE_SYNC];

            const syncOptions = {
                logging: sqlDebug,
                force: syncType == SyncTypes.FORCE,
                alter: syncType == SyncTypes.ALTER,
            }

            //log(`[Sequelize] syncOptions = \n${JSON.stringify(syncOptions)}`);

            await this.sequelize.sync(syncOptions);
            //log(`${whiteBright('[Sequelize] Sincronizado!')}`);

        } catch (exception) {
            error(`${red('[Sequelize] Erro ao sincronizar o Banco de Dados')}`);
            error(`${red(exception.stack)}`);
        }
    };

    private initModels() {
        this.Models = importModels();
        this.Models.forEach(M => M.initDefault(this.sequelize))

        //log("[Sequelize] Models iniciadas!");
    }

    private async associateModels() {
        this.Models.forEach(M => M.associate());

        //log("[Sequelize] Associações realizadas!");
    }

    private async populateModels() {
        this.Models.forEach(M => M.populate());

        //log("[Sequelize] Models populadas!")        
    }

}