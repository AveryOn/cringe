import express from 'express';
const chapterRouter = express.Router();
import Logger from '../logger/index.js';
import chapterController from '../database/controllers/chapterController.js';

//  /chapters

// Создание нового раздела
chapterRouter.post('/create', async(req, res) => {
    try {
        const { title, subjectID, color } = req.body;
        const chapter = await chapterController.createChapter(title, subjectID, color);
        res.status(200).send({ status: 200, data: chapter });
        Logger.initLog().log('POST -> host/chapters/create => status: 200');
    } catch (err) {
        res.status(500).send(`POST -> Ошибка при создании Chapter => ${err?.message}`);
    }
});

// Получение всех разделов с БД
chapterRouter.get('/', async(req, res) => {
    try {
        const chapters = await chapterController.getAllChapters();
        res.status(200).send({ status: 200, data: chapters });
        Logger.initLog().log('GET -> host/chapters/ => status: 200');
    } catch (err) {
        res.status(500).send(`GET -> Ошибка при получении Chapters => ${err?.message}`);
    }
});

// Получение раздела по ID
chapterRouter.get('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const chapter = await chapterController.getChapterByID(id);
        res.status(200).send({ status: 200, data: chapter });
        Logger.initLog().log(`GET -> host/chapters/${id} => status: 200`);
    } catch (err) {
        res.status(500).send(`GET -> Ошибка при получении Chapter:${id} => ${err?.message}`);
    }
});

// Обновление существующего раздела по ID
chapterRouter.put('/:id/update', async(req, res) => {
    const { id } = req.params;
    try {
        const { title, subjectId, color, subjectValue } = req.body;
        const updatedChapter = await chapterController.updateChapter( id, title, subjectId, color, subjectValue);
        res.status(200).send({ status: 200, data: updatedChapter });
        Logger.initLog().log(`PUT -> host/chapters/${id}/update => status: 200`);
    } catch (err) {
        res.status(500).send(`PUT -> Ошибка при обновлении Chapter:${id} => ${err?.message}`);
    }
});

// Удаление существующего раздела по ID
chapterRouter.delete('/:id/delete', async(req, res) => {
    const { id } = req.params;
    try {
        await chapterController.deleteChapter(id);
        res.status(200).send({ status: 200 });
        Logger.initLog().log(`DELETE -> host/chapters/${id}/delete => status: 200`);
    } catch (err) {
        res.status(500).send(`DELETE -> Ошибка при удалении Chapter => ${err?.message}`);
    }
});


export default chapterRouter;