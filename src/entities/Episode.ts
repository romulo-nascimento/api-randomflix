import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Season } from './Season'

@Entity('episodes')
class Episode {
    @PrimaryColumn()
    id: string

    @JoinColumn({ name: 'season_id' })
    @ManyToOne(() => Season)
    season: Season

    @Column({ name: 'season_id' })
    seasonId: string
    
    @Column()
    number: number

    @Column()
    title: string

    @Column({ name: 'release_date' })
    releaseDate: string

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }  
}

export { Episode }