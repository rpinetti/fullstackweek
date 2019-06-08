import { Router } from 'express';
const routes = Router();

import fairsController from './controllers/FairsControler';

//Rotas
routes.get('/', (req, res) => {
    res.send('Bem-vindo a feira em casa!!!');
});
routes.get('/fairs', fairsController.read);
routes.get('/fairs/:id', fairsController.readId);
routes.post('/fairs', fairsController.create);
routes.put('/fairs/:id', fairsController.update);
routes.delete('/fairs/:id', fairsController.delete);

export default routes;