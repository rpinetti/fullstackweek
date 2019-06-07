const express = require('express');
const routes = express.Router();

const fairsController = require('./controllers/FairsController');

//Rotas
function routeDefault(req, res) {
    return res.send('Bem-vindo a feira em casa!!!');
};

routes.get('/', routeDefault);
routes.get('/fairs', fairsController.read);
routes.post('/fairs', fairsController.create);

module.exports = routes;