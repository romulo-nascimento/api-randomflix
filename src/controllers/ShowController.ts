import { Request, Response } from 'express';

import ShowService from '../services/ShowService';
import { ErrorCode } from '../utils/constants';

class ShowController {
  async getByTerm(request: Request, response: Response): Promise<Response> {
    const term = request.query.term as string; 
  
    if (!term) {
      return response.status(ErrorCode.PARAM_MISSING).send({
        message: 'Required "term" parameter is missing!'
      });
    }
  
    try {
      const showService = new ShowService();
  
      const shows = await showService.getByTerm(term);
  
      return response.json(shows);
    } catch (error) {
      return response.status(ErrorCode.SERVER_ERROR).send({
        message: error.message
      });
    }
  }

  async getRandomShowEpisode(request: Request, response: Response): Promise<Response> {
    const showIdsParam = request.query.showIds;
    const showIds = showIdsParam?.toString().split(',') || [];
  
    if (!showIds.length) {
      return response.status(ErrorCode.PARAM_MISSING).send({
        message: 'Required "showIds" parameter is missing!'
      });
    }
  
    try {
      const showService = new ShowService();
  
      const episode = await showService.getRandomShowEpisode(showIds);
  
      return response.json(episode);
    } catch (error) {
      return response.status(ErrorCode.SERVER_ERROR).send({
        message: error.message
      });
    }
  }
}

export default ShowController;