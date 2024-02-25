// Сущность единицы сообщения

import Connection from '../connect.js';
import { Model, DataTypes } from 'sequelize';

class Unit extends Model {};

Unit.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false,
    },
    images: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    videos: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    audios: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
}, {
    sequelize: Connection.sequelize,
    modelName: 'Unit',
    tableName: 'Units',
    paranoid: true,
});

export { Unit };