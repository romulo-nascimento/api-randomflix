import { EntityRepository, Repository } from 'typeorm';
import { Episode } from '../entities/Episode';

@EntityRepository(Episode)
class EpisodeRepository extends Repository<Episode> {}

export { EpisodeRepository }