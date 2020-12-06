import dotenv from 'dotenv';
import { green, red, whiteBright } from 'chalk';
import app from './app';
import Database from './database';
import { startMocks } from '../mocks';

//Init .env
dotenv.config();

const { log } = console;
const { SERVER_PORT } = process.env;

export default class Server {
    private static database = new Database();

    public async start() {
        try {
            console.log("Iniciando servidor. . . ")
            
            await Server.database.connect();

            startMocks();

            console.log("Mocks criados! ")
            
            app.listen(SERVER_PORT, () => {
                log(`${green(`Servidor Iniciado em http://localhost:${SERVER_PORT}/`)}`)
            });

        } catch (error) {
            console.error(red(error.stack));
        }
    }
}

