import { Request, Response } from 'express'
import { EpisodeService } from '../services/EpisodeService'
import { SeasonService } from '../services/SeasonService'

class SeasonController {
    async create(request: Request, response: Response): Promise<Response> {
        const { title } = request.body

        try {
            const seasonService = new SeasonService()
    
            const season = await seasonService.create(title)
    
            return response.json(season)
        } catch (error) {
            return response.status(500).send({ message: error.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {
            const seasonService = new SeasonService()

            const seasons = await seasonService.getAll()

            return response.json(seasons)
        } catch (error) {
            return response.status(500).send({ message: error.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        
        try {
            const seasonService = new SeasonService()

            const season = await seasonService.getById(id)

            if (!season) {
                return response.status(404).send({ message: 'Season not found.' })
            }

            return response.json(season)
        } catch (error) {
            return response.status(500).send({ message: error.message })
        }
    }

    async getEpisodes (request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        
        try {
            const seasonService = new SeasonService()

            const season = await seasonService.getById(id)

            if (!season) {
                return response.status(404).send({ message: 'Season not found.' })
            }

            const episodeService = new EpisodeService()

            const episodes = await episodeService.getAllBySeason(id)

            return response.json(episodes)
        } catch (error) {
            return response.status(500).send({ message: error.message })
        }
    }

    async getRandom (request: Request, response: Response): Promise<Response> {
        try {
            const seasonService = new SeasonService()

            const seasons = await seasonService.getAll()
            const randomSeason = seasons[Math.floor(Math.random() * seasons.length)]

            const episodeService = new EpisodeService()
            const episodes = await episodeService.getAllBySeason(randomSeason.id)
            const randomEpisode = episodes[Math.floor(Math.random() * episodes.length)]

            return response.json(randomEpisode)
        } catch (error) {
            return response.status(500).send({ message: error.message })
        }
    }

    async createEpisodes(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const episodeList: [] = request.body

        try {
            const seasonService = new SeasonService()

            const season = await seasonService.getById(id)

            if (!season) {
                return response.status(404).send({ message: 'Season not found.' })
            }

            const episodeService = new EpisodeService()
            
            const episodes = await Promise.all(episodeList.map(async (episode: { number: number, title: string, release_date: string }) => {
                return await episodeService.create(id, episode.number, episode.title, episode.release_date)
            }))
    
            return response.json(episodes)
        } catch (error) {
            return response.status(500).send({ message: error.message })
        }
    }
}

export { SeasonController }