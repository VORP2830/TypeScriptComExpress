import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
    const dbUrl = config.get<string>('dbUrl')
    try {
        await mongoose.connect(dbUrl);
        logger.info('Banco de dados conectado')
    } catch (e) {
        logger.error('Não foi possivel conectar ao banco de dados');
        logger.error('Erro: '+ e);
    }
}

export default connect;