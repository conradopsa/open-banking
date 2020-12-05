import { Sequelize } from "sequelize";

export function checkInstance(sequelize?: Sequelize) {
    if (!sequelize)
        throw "Sequelize has no instance"
    
    return sequelize;
} 
