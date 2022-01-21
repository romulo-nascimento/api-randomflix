import { Request, Response } from 'express';
import ShowService from '../services/ShowService';

class ShowController {
    async getByTerm(request: Request, response: Response): Promise<Response> {
        const term = request.query.term as string 
        const country = request.query.country as string

        if (!term) {
            return response.status(422).send({
                message: 'Required "term" parameter is missing!'
            });
        }

        try {
            const showService = new ShowService();

            const shows = await showService.getByTerm(term, country);

            return response.json(shows);
        } catch (error) {
            return response.status(500).send({
                message: error.message
            });
        }
    }
}

export default ShowController