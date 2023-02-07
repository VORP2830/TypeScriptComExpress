import express from 'express';
import config from 'config';


import db from '../config/db'

import router from './router'
import logger from '../config/logger';
import morganMiddleware from './middleware/morganMiddleware';

const app = express();
const port = config.get<number>("port")

app.use(
    express.json(),
    morganMiddleware
);
app.use('/api/', router);


app.listen(port , async () => {
    await db();
    logger.info(`Servidor rodando na porta ${port}`)
});