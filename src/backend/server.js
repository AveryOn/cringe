import express from 'express';
import cors from 'cors';
import mainRouter from './router/index.js';
import Logger from './logger/index.js';
// DB connection
import { Connection, Controllers, Models } from './database/index.js';

const app = express();

Connection.checkConnectionDB().catch((err) => {
    throw new Error(`server:checkConnectionDB  => ${err}`);
});
// =============================================   Synchronized DB   =================================================
// Connection.sequelize.sync({alter: true});

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


function serverStart() {
    app.listen(3000, () => {
        Logger.initLog().log('Server has been started on 3000');
    });
}

serverStart();

// export { serverStart };