import { Unit } from '../models/Unit.js';
import Connection from '../connect.js';
import Logger from '../../logger/index.js';

// Функция распаковывает полученные данные. Поля images/audios/videos - распаковываются с JSON 
function unpackageUnit(units) {
    // Если приходящие данные представлены в виде массива объекта
    if(Array.isArray(units)) {
        const resultUnits = [];
        try {
            units.forEach( async(unit) => {
                unit.images = JSON.parse(unit.images);
                unit.videos = JSON.parse(unit.videos);
                unit.audios = JSON.parse(unit.audios);
                resultUnits.push(unit.toJSON());
            });
            return resultUnits;
        } catch (err) {
            Logger.initLog().err(`Не удалось распаковать массив Units  => ${err?.message}`);
        }
    } else {
        // Если данные предствлены в виде одиночного объекта
        units.images = JSON.parse(units.images);
        units.videos = JSON.parse(units.videos);
        units.audios = JSON.parse(units.audios);
        return units?.toJSON();
    }
}

// Создание Юнита
async function createUnit(title, message, images, videos, audios) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const imagesString = JSON.stringify(images);
        const videosString = JSON.stringify(videos);
        const audiosString = JSON.stringify(audios);

        // Создается новая запись Юнита в БД
        const unit = await Unit.create({
            title,
            message,
            images: imagesString,
            videos: videosString,
            audios: audiosString,
        }, {transaction});
        const readyUnit = await unpackageUnit(unit);
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/unitsController:createUnit => Unit успешно записан в Базу Данных');
        return readyUnit;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> сontrollers/unitsController:createUnit  =>', err);
    }
}

// Полчуение всех юнитов с БД
async function getAllUnits() {
    const transaction = await Connection.sequelize.transaction();
    try {
        const units = await Unit.findAll({ transaction });
        // Конвертирование объектов unit для распаковки с JSON-формата audios/video/images
        const convertedUnits = await unpackageUnit(units);
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/unitsController:getAllUnits => Все Units успешно получены из БД');
        return convertedUnits;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/unitsController:getAllUnits  =>', err);
    }
}

// Получение юнита по ID
async function getUnitByID(unitId) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const unit = await Unit.findByPk(unitId, { transaction });
        // Конвертирование объектов unit для распаковки с JSON-формата audios/video/images
        const convertedUnit = await unpackageUnit(unit);
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/unitsController:getUnitByID => Unit<_id> успешно получен из БД');
        return convertedUnit;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err(`DATABASE -> controllers/unitsController:getUnitByID  => ${err}`);
    }
}

// Обновление существующего юнита по ID
async function updateUnit(unitId, title, message, images, videos, audios) {
    const transaction = await Connection.sequelize.transaction();
    try {
        // Форматируем массивы в JSON
        const imagesString = JSON.stringify(images);
        const videosString = JSON.stringify(videos);
        const audiosString = JSON.stringify(audios);
        const unit = await Unit.findByPk(unitId, { transaction });
        const updatedUnit = unit.set({ 
            title, 
            message, 
            images: imagesString, 
            audios: videosString, 
            videos: audiosString,
        });
        await updatedUnit.save({ transaction });
        const readyUnit = await unpackageUnit(updatedUnit);
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/unitsController:updateUnit => Unit<_id> успешно обновлен в БД!');
        return readyUnit;
    } catch (err) {
        // await transaction.rollback();
        Logger.initLogBg().err(`DATABASE -> controllers/unitsController:updateUnit  => ${err}`);
    }
}

// Удаление существующего юнита по ID
async function deleteUnit(unitId) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const unit = await Unit.findByPk(unitId, { transaction });
        await unit.destroy({ transaction });
        const readyUnit = await unpackageUnit(unit);
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/unitsController:deleteUnit => unit<_id> успешно удален из БД!');
        return readyUnit;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err(`DATABASE -> controllers/unitsController:deleteUnit  =>  ${err}` );
    }
}


export default {
    createUnit,
    getAllUnits,
    getUnitByID,
    updateUnit,
    deleteUnit,
}