import express from 'express';
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.send('req.body');
});

mainRouter.post('/', (req, res) => {
    const data = req.body;
    res.status(200).send(data);
});

export default mainRouter;