import express from 'express';
const unitRouter = express.Router();
import Logger from '../logger/index.js';
import unitsController from '../database/controllers/unitsController.js';

//  /units
unitRouter.post('/create', async(req, res) => {
    try {
        const { title, message, images, videos, audios, subject } = req.body;
        await unitsController.createUnit(title, message, images, videos, audios, subject);
        res.status(200).send('Юнит успешно создан в БД!');
        Logger.initLog().log('Юнит успешно создан в БД!');
    } catch (err) {
        res.status(500).send(`Ошибка при создании юнита => ${err?.message}`);
    }
});


export default unitRouter;