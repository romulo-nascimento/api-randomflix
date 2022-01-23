import { Request, Response } from 'express';
import { EpisodeService } from '../services/EpisodeService';

class EpisodeController {
  async getAll (request: Request, response: Response): Promise<Response> {
    try {
      const episodeService = new EpisodeService();

      const episodes = await episodeService.getAll();

      return response.json(episodes);
    } catch (error) {
      return response.status(500).send({ message: error.message });
    }
  }
    
  async create(request: Request, response: Response): Promise<Response> {
    const { seasonId, number, title, releaseDate } = request.body;

    try {
      const episodeService = new EpisodeService();
    
      const episode = await episodeService.create(seasonId, number, title, releaseDate);
    
      return response.json(episode);
    } catch (error) {
      return response.status(500).send({ message: error.message });
    }
  }
}

export { EpisodeController };