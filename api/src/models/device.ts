
import { Sequelize, ModelAttributes, InitOptions, DataTypes, FindOptions } from 'sequelize'
import { SuperModel } from '.';

export default class Device extends SuperModel {
    /*
    POSTERIORMENTE, se quisermos guardar o histórico de autenticações de
    um dispositivo (Device), precisaremos modelar um relacionamento N:N,
    portanto uma terceria model viria a ser feita.

    LATER, if we want to store the authentication history of a device, 
    we will need to model an N:N relationship, so a third 
    model would be made.
    */

    serialNumber!: string;
    name!: string;
    description!: string;
    status!: boolean;

    static basicAttributes = ['serialNumber', 'name', 'description', 'status'];

    static initDefault(sequelize: Sequelize) {

        const initOptions: InitOptions = {
            sequelize: sequelize,
            paranoid: true,
            defaultScope: Device.defaultScope
        }

        Device.init(Device.attributes, initOptions);
    }

    static associate() {
    }

    private static attributes: ModelAttributes = {
        serialNumber: { type: DataTypes.STRING, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: true },
        status: { type: DataTypes.BOOLEAN, allowNull: false }
    };

    private static defaultScope: FindOptions<any> = {
        attributes: Device.basicAttributes,
        include: []
    };

}
