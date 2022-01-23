import { Router } from 'express';

import ShowController from './controllers/ShowController';

const routes = Router();

const showController = new ShowController();

routes.get('/show', showController.getByTerm);
routes.get('/random', showController.getRandomShowEpisode);

export { routes };