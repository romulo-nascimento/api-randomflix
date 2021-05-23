import { getCustomRepository, Repository } from 'typeorm'
import { Episode } from '../entities/Episode'

import { EpisodeRepository } from '../repositories/EpisodeRepository'

class EpisodeService {
    private episodeRepository: Repository<Episode>

    constructor() {
        this.episodeRepository = getCustomRepository(EpisodeRepository)
    }

    async create(seasonId: string, number: number, title: string, releaseDate: string) {
        const episodeExists = await this.episodeRepository.findOne({ number, seasonId })
        console.log(episodeExists)

        if (episodeExists) {
            throw Error('Episode number already exists.')
        }

        console

        const episode = this.episodeRepository.create({
            seasonId,
            number,
            title,
            releaseDate
        })

        await this.episodeRepository.save(episode)

        return episode
    }

    async getAll() {
        const episodesData = await this.episodeRepository.find({
            relations: ['season']
        })

        const episodes = episodesData.map(({ seasonId, ...episode }) => {
            return episode
        })

        return episodes
    }

    async getAllBySeason(seasonId: string) {
        const episodesData = await this.episodeRepository.find({
            where: { seasonId },
            order: { number: 'ASC' },
            relations: ['season']
        })

        const episodes = episodesData.map(({ seasonId, ...episode }) => {
            return episode
        })

        return episodes
    }
}

export { EpisodeService }