import express from 'express';
const unitRouter = express.Router();
import Logger from '../logger/index.js';
import unitsController from '../database/controllers/unitsController.js';

//  /units
// Создание нового Юнита
unitRouter.post('/create', async(req, res) => {
    try {
        const { title, message, images, videos, audios } = req.body;
        const unit = await unitsController.createUnit(title, message, images, videos, audios);
        res.status(200).send({ status: 200, data: unit });
        Logger.initLog().log('POST -> host/units/create => status: 200');
    } catch (err) {
        res.status(500).send(`POST -> Ошибка при создании Unit => ${err?.message}`);
    }
});

// Получение всех юнитов с БД
unitRouter.get('/', async(req, res) => {
    try {
        const units = await unitsController.getAllUnits();
        res.status(200).send({ status: 200, data: units });
        Logger.initLog().log('GET -> host/units/ => status: 200');
    } catch (err) {
        res.status(500).send(`GET -> Ошибка при получении Units => ${err?.message}`);
    }
});

// Получение юнита по ID
unitRouter.get('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const unit = await unitsController.getUnitByID(id);
        res.status(200).send({ status: 200, data: unit });
        Logger.initLog().log(`GET -> host/units/${id} => status: 200`);
    } catch (err) {
        res.status(500).send(`GET -> Ошибка при получении Unit:${id} => ${err?.message}`);
    }
});

// Обновление существующего юнита по ID
unitRouter.put('/:id/update', async(req, res) => {
    const { id } = req.params;
    try {
        const { title, message, images, videos, audios } = req.body;
        const updatedUnit = await unitsController.updateUnit( id, title, message, images, videos, audios);
        res.status(200).send({ status: 200, data: updatedUnit });
        Logger.initLog().log(`PUT -> host/units/${id}/update => status: 200`);
    } catch (err) {
        res.status(500).send(`PUT -> Ошибка при обновлении Unit:${id} => ${err?.message}`);
    }
});

// Удаление существующего юнита по ID
unitRouter.delete('/:id/delete', async(req, res) => {
    const { id } = req.params;
    try {
        const unit = await unitsController.deleteUnit(id);
        res.status(200).send({ status: 200, data: unit });
        Logger.initLog().log(`DELETE -> host/units/${id}/delete => status: 200`);
    } catch (err) {
        res.status(500).send(`DELETE -> Ошибка при удалении Unit => ${err?.message}`);
    }
});


export default unitRouter;