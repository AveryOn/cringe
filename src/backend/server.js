import express from 'express';
import cors from 'cors';
import mainRouter from './router/index.js';

const app = express();

// ==================================================   CORS   =================================================
app.use(cors());


// =================================================   SETTING   =================================================
app.use(express.json()); // для парсинга application/json
app.use(express.urlencoded({ extended: false })); // для парсинга application/x-www-form-urlencoded

 
// =================================================   ROUTER   =================================================
app.use('/', mainRouter);


function serverStart() {
    app.listen(3000, () => {
        console.log('Server has been started on 3000');
    });
}

serverStart()

// export { serverStart };