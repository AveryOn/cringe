import express from 'express';
import cors from 'cors';
import mainRouter from './router/index.js';
import unitRouter from './router/unitRouter.js';
import subjectRouter from './router/subjectRouter.js';
import chapterRouter from './router/chapterRouter.js';
import Logger from './logger/index.js';
// DB connection
import { Connection, Controllers, Models } from './database/index.js';

const app = express();

Connection.checkConnectionDB().catch((err) => {
    throw new Error(`server:checkConnectionDB  => ${err}`);
});
// =============================================   Synchronized DB   =================================================
// Connection.sequelize.sync({force: true});

// ==================================================   CORS   =================================================
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: false,
    allowedHeaders: ['Access-Control-Allow-Origin', '*'],
}));


// =================================================   SETTING   =================================================
app.use(express.json()); // для парсинга application/json
app.use(express.urlencoded({ extended: false })); // для парсинга application/x-www-form-urlencoded


// =================================================   ROUTER   =================================================
app.use('/', mainRouter);
app.use('/units', unitRouter);
app.use('/subjects', subjectRouter);
app.use('/chapters', chapterRouter);


function serverStart() {
    app.listen(3000, () => {
        Logger.initLog().log('Server has been started on 3000');
    });
}

serverStart();
