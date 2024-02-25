import { Unit } from '../models/Unit.js';
import Connection from '../connect.js';
import Logger from '../../logger/index.js';
 

// Создание Юнита
async function createUnit(title, message, images, videos, audios) {
    const transaction = await Connection.sequelize.transaction();
    try {
        // Создается новая запись Юнита в БД
        await Unit.create({
            title,
            message,
            images,
            videos,
            audios,
        }, {transaction});
        await transaction.commit();
        Logger.initLogBg().success('controllers/unitsController:createUnit => Unit успешно записан в Базу Данных');
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('controllers/unitsController:createUnit  =>', err);
    }
}

export default {
    createUnit,
}