import { Subject } from '../models/Subject.js';
import Connection from '../connect.js';
import Logger from '../../logger/index.js';

// Создание новой тематики
async function createSubject(value) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const subject = await Subject.create({ value }, { transaction, raw: true });
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/subjectController:createSubject => subject успешно записан в Базу Данных!');
        return subject;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/subjectController:createSubject  =>', err);
    }
}

// Получение всех тематик
async function getAllSubjects() {
    const transaction = await Connection.sequelize.transaction();
    try {
        const subjects = await Subject.findAll({ raw: true, transaction });
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/subjectController:getAllSubjects => Все subjects успешно поучены из БД');
        return subjects;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/subjectController:getAllSubjects  =>', err);
    }
}

// Получение тематики по ID
async function getSubjectByID(subjectID) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const subject = await Subject.findByPk(subjectID, {
            raw: true,
            transaction
        });
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/subjectController:getSubjectByID => Subject<_id> успешно получен из БД');
        return subject;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/subjectController:getSubjectByID  =>', err);
    }
}

// Обновление существующей тематики по ID
async function updateSubject(subjectID, value) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const subject = await Subject.findByPk(subjectID, { transaction });
        const updatedSubject = subject.set({ value });
        await updatedSubject.save({ transaction });
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/subjectController:updateSubject => subject<_id> успешно обновлен в БД!');
        return updatedSubject;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/subjectController:updateSubject  =>', err);
    }
}

// Удаление существующей тематики по ID
async function deleteSubject(subjectID) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const subject = await Subject.findByPk(subjectID, { transaction });
        await subject.destroy({ transaction });
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/subjectController:deleteSubject => subject<_id> успешно удален из БД!');
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/subjectController:deleteSubject  =>', err);
    }
}


export default {
    createSubject,
    getAllSubjects,
    getSubjectByID,
    updateSubject,
    deleteSubject,
}