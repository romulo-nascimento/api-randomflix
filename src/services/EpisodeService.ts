import { getCustomRepository, Repository } from 'typeorm';
import { Episode } from '../entities/Episode';

import { EpisodeRepository } from '../repositories/EpisodeRepository';

class EpisodeService {
  async getRandomEpisode(showId: string) {

    return showId;
  }
}

export { EpisodeService };