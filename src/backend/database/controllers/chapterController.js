import { Chapter } from '../models/Chapter.js';
import { Subject } from '../models/Subject.js';
import Connection from '../connect.js';
import Logger from '../../logger/index.js';

async function convertChapterForClient(chapters) {
    // Если полученный даные представлены в виде массива то итерируемся по массиву и на каждый элемент выполняем запрос на поиск subject
    if (Array.isArray(chapters)) {
        const promises = [];
        const resultChapters = [];
        chapters.forEach(async (chapter) => {
            const promise = Subject.findByPk(chapter?.subjectId).then((subject) => {
                resultChapters.push({
                    id: chapter?.id,
                    title: chapter?.title,
                    subject: subject?.value,
                    subjectId: subject?.id,
                    color: chapter?.color,
                    updatedAt: chapter?.updatedAt,
                    createdAt: chapter?.createdAt,
                });
            });
            promises.push(promise);
        });
        // Пока все промисы не выполнятся, массив конвертированных разделов не будет возвращен
        await Promise.all(promises);
        return resultChapters;
    } else {
        // Если полученные данные представлены в виде обьекта, то выполняем один запрос для Subject`
        if (typeof chapters === 'object' && chapters !== null) {
            const subject = await Subject.findByPk(chapters?.subjectId);
            // Поднимаем исключение если subject относится к удаленным
            if(!subject) {
                throw new Error(`Не удалось использовать subject так как он мягко удален или его не существует`);
            }
            return {
                id: chapters?.id,
                title: chapters?.title,
                subject: subject?.value,
                subjectId: subject?.id,
                color: chapters?.color,
                updatedAt: chapters?.updatedAt,
                createdAt: chapters?.createdAt,
            }
        } else Logger.initLog().err('convertChapterForClient =>  Передаваемый аргумент не является объектом')
    }
}

// Создание нового раздела
async function createChapter(title, subjectID, color) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const newChapter = await Chapter.create({
            title,
            subjectId: subjectID,
            color,
        }, { transaction });
        // Конвертирование объекта chapter для отображение его subject.value вместо subjectId 
        const chapter = await convertChapterForClient(newChapter);
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/chapterController:createChapter => chapter успешно записан в Базу Данных!');
        return chapter;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/chapterController:createChapter  =>', err);
    }
}

// Получение всех разделов с БД
async function getAllChapters() {
    const transaction = await Connection.sequelize.transaction();
    try {
        const chapters = await Chapter.findAll({ transaction });
        // Конвертирование объектов chapter для отображение его subject.value вместо subjectId 
        const convertedChapters = await convertChapterForClient(chapters);
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/subjectController:getAllSubjects => Все subjects успешно поучены из БД');
        return convertedChapters;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/subjectController:getAllSubjects  =>', err);
    }
}

// Получение раздела по ID
async function getChapterByID(chapterID) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const chapter = await Chapter.findByPk(chapterID, { transaction });
        // Конвертирование объекта chapter для отображение его subject.value вместо subjectId 
        const convertedChapter = await convertChapterForClient(chapter);
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/chapterController:getChapterByID => Chapter<_id> успешно получен из БД');
        return convertedChapter;
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/chapterController:getChapterByID  =>', err);
    }
}

// Обновление существующего раздела по ID
async function updateChapter(chapterID, title, subjectId, color, subjectValue) {
    const transaction = await Connection.sequelize.transaction();
    // Если SubjectValue имеет какое-то значение то это говорит о том, что на клиенте пытаются обновить существующий раздел, создавая при этом новую тематику subject
    return new Promise(async (resolve, reject) => {
        try {
            // Создаем тематику если ее не существует
            if (subjectValue && !subjectId) {
                const [subject, created] = await Subject.findOrCreate({
                    where: { value: subjectValue },
                    defaults: {
                        value: subjectValue,
                    },
                    transaction
                });
                const chapter = await Chapter.findByPk(chapterID, { transaction });
                const updatedChapter = chapter.set({ title, subjectId: subject?.id, color });
                await updatedChapter.save({ transaction });
                await transaction.commit();
                const readyChapter = await convertChapterForClient(updatedChapter);
                Logger.initLogBg().success('DATABASE -> controllers/chapterController:updateChapter => Chapter<_id> успешно обновлен в БД!');
                resolve(readyChapter);
            } else {
                // Классическое обновление раздела, без создания новой тематики
                const chapter = await Chapter.findByPk(chapterID, { transaction });
                const updatedChapter = chapter.set({ title, subjectId, color });
                await updatedChapter.save({ transaction });
                await transaction.commit();
                const readyChapter = await convertChapterForClient(updatedChapter);
                Logger.initLogBg().success('DATABASE -> controllers/chapterController:updateChapter => Chapter<_id> успешно обновлен в БД!');
                resolve(readyChapter);
            }
        } catch (err) {
            await transaction.rollback();
            Logger.initLogBg().err('DATABASE -> controllers/chapterController:updateChapter');
            reject(err);
        }
    });
}

// Удаление существующего раздела по ID
async function deleteChapter(chapterID) {
    const transaction = await Connection.sequelize.transaction();
    try {
        const chapter = await Chapter.findByPk(chapterID, { transaction });
        await chapter.destroy({ transaction });
        await transaction.commit();
        Logger.initLogBg().success('DATABASE -> controllers/chapterController:deleteChapter => chapter<_id> успешно удален из БД!');
    } catch (err) {
        await transaction.rollback();
        Logger.initLogBg().err('DATABASE -> controllers/chapterController:deleteChapter  =>', err);
    }
}


export default {
    createChapter,
    getAllChapters,
    getChapterByID,
    updateChapter,
    deleteChapter,
}