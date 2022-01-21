import { Router } from 'express';
import { SeasonController, EpisodeController } from './controllers';
import ShowController from './controllers/ShowController';

const routes = Router()

const seasonController = new SeasonController()
const showController = new ShowController()

routes.get('/show', showController.getByTerm)

routes.get('/season', seasonController.getAll)
// routes.post('/season', seasonController.create)

routes.get('/season/:id', seasonController.getById)

routes.get('/season/:id/episode', seasonController.getEpisodes)
// routes.post('/season/:id/episode', seasonController.createEpisodes)

routes.get('/random', seasonController.getRandom)

const episodeController = new EpisodeController()

routes.get('/episode', episodeController.getAll)
// routes.post('/episode', episodeController.create)


export { routes }