import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import requireDir from 'require-dir';
import routes from './routes';

// Inicia o Aplicativo
const app = express();
app.use(express.json());
app.use(cors());

// Inicia o MongoDB
try{
    mongoose.connect('mongodb+srv://rpinetti_admin:S@g1tario@cluster0-boroe.mongodb.net/feira_em_casa?retryWrites=true&w=majority', { useNewUrlParser: true });
    console.log('MongoDB conectado!!!');
} catch (err) {
    console.log('Erro na conexão com o MongoDB');
    console.warn(err);
}

// Mapeia os arquivos JS
requireDir('./models');

// Rotas
app.use('/api', routes);

// Porta da aplicação
app.listen(3001);