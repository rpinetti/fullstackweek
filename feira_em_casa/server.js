const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// Inicia o Aplicativo
const app = express();
app.use(express.json());
app.use(cors());

// Inicia o MongoDB
try{
    mongoose.connect('mongodb+srv://rpinetti_admin:S@g1tario@cluster0-boroe.mongodb.net/feira_em_casa?retryWrites=true&w=majority', { useNewUrlParser: true } );
} catch (err) {
    console.log('Erro na conexão com o MongoDB');
    console.warn(err);
}

// Mapeia os arquivos JS
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

// Porta da aplicação
app.listen(3001);
