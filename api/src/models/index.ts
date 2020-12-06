import { Model, Sequelize } from 'sequelize'
import path from 'path';

export class SuperModel extends Model {
    static basicAttributes?: string[] | string[][];
    static associate = () => {};
    static initDefault = (sequelize: Sequelize) => {};    
    static populate = async () => {};
}

//Alert: this models must be in order
const modelList = [
    './user',
    './device' 
]

function importModels(): (typeof SuperModel)[] {
    return modelList.map(model => {
        return require(model).default
    });
}

export default importModels;