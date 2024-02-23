// Сущность раздела тематики
import Connection from '../connect.js';
import { Model, DataTypes } from 'sequelize';

class Chapter extends Model {};

Chapter.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: Connection.sequelize,
    modelName: 'Chapter',
    tableName: 'Chapters',
});

export { Chapter };