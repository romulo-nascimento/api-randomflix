import { getCustomRepository, Repository } from 'typeorm'
import { Season } from '../entities/Season'

import { SeasonRepository } from '../repositories/SeasonRepository'

class SeasonService {
    private seasonRepository: Repository<Season>

    constructor() {
        this.seasonRepository = getCustomRepository(SeasonRepository)
    }

    async getAll() {
        const seasons = this.seasonRepository.find()

        return seasons
    }

    async getById(id: string) {
        const season = this.seasonRepository.findOne({ id })

        return season
    }
    
    async create(title: string) {
        const season = this.seasonRepository.create({title})

        await this.seasonRepository.save(season)

        return season
    }
}

export { SeasonService }