import express from 'express';
const subjectRouter = express.Router();
import Logger from '../logger/index.js';
import subjectController from '../database/controllers/subjectController.js';

//  /subjects

// Создание новой тематики
subjectRouter.post('/create', async(req, res) => {
    try {
        const { value } = req.body;
        await subjectController.createSubject(value)
        res.status(200).send({ status: 200 });
        Logger.initLog().log('POST -> host/subjects/create => status: 200');
    } catch (err) {
        res.status(500).send(`POST -> Ошибка при создании Subject => ${err?.message}`);
    }
});

// Получение всех тематик с БД
subjectRouter.get('/', async(req, res) => {
    try {
        const subjects = await subjectController.getAllSubjects();
        res.status(200).send({ status: 200, data: subjects });
        Logger.initLog().log('GET -> host/subjects/ => status: 200');
    } catch (err) {
        res.status(500).send(`GET -> Ошибка при получении Subjects => ${err?.message}`);
    }
});

// Получение тематики по ID
subjectRouter.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const subject = await subjectController.getSubjectByID(id);
        res.status(200).send({ status: 200, data: subject });
        Logger.initLog().log(`GET -> host/subjects/${id} => status: 200`);
    } catch (err) {
        res.status(500).send(`GET -> Ошибка при получении Subject:${subjectID} => ${err?.message}`);
    }
});

// Обновление существующей тематики по ID
subjectRouter.put('/:id/update', async(req, res) => {
    try {
        const { id } = req.params;
        const { value } = req.body;
        const updatedSubject = await subjectController.updateSubject( id, value);
        res.status(200).send({ status: 200, data: updatedSubject });
        Logger.initLog().log(`POST -> host/subjects/${id}/update => status: 200`);
    } catch (err) {
        res.status(500).send(`POST -> Ошибка при обновлении Subject => ${err?.message}`);
    }
});

// Удаление существующей тематики по ID
subjectRouter.delete('/:id/delete', async(req, res) => {
    try {
        const { id } = req.params;
        await subjectController.deleteSubject(id);
        res.status(200).send({ status: 200 });
        Logger.initLog().log(`POST -> host/subjects/${id}/delete => status: 200`);
    } catch (err) {
        res.status(500).send(`POST -> Ошибка при удалении Subject => ${err?.message}`);
    }
});


export default subjectRouter;