// Сущность раздела тематики
import Connection from '../connect.js';
import { Model, DataTypes } from 'sequelize';

class Subject extends Model {};

Subject.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: Connection.sequelize,
    modelName: 'Subject',
    tableName: 'Subjects',
    paranoid: true,
});

export { Subject };