import { EntityRepository, Repository } from 'typeorm';
import { Season } from '../entities/Season';

@EntityRepository(Season)
class SeasonRepository extends Repository<Season> {}

export { SeasonRepository }