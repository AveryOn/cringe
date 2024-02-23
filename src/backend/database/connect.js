import { Sequelize } from 'sequelize';
import Logger from '../logger/index.js';

//========================  Database connections  =========================
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './DB/storage.db',
});

// Проверка успешности подключения к DB
async function checkConnectionDB () {
    try {
        await sequelize.authenticate();
        Logger.initLogBg().success('successful connection to the database');
    } catch (error) {
        Logger.initLogBg().err('successful connection to the database', err);
    }
};


export default {
    sequelize,
    checkConnectionDB,
}