import express from 'express';
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.send('Привет, мир!');
});

export default mainRouter;