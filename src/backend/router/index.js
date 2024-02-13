import express from 'express';
const mainRouter = express.Router();

router.get('/', (req, res) => {
    res.send('Привет, мир!');
});

export default mainRouter;