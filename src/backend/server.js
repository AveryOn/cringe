import express from 'express';
import cors from 'cors';
import mainRouter from './router';

const app = express();


// =================================================   SETTING   =================================================
app.use(express.json()); // для парсинга application/json
app.use(express.urlencoded({ extended: false })); // для парсинга application/x-www-form-urlencoded

// =================================================   ROUTER   =================================================
app.use('/', mainRouter);


// ==================================================   CORS   =================================================
app.use(cors( {origin: '*'} ));


function serverStart() {
    app.listen(3000, () => {
        console.log('Server has been started on 3000');
    });
}

export {serverStart};