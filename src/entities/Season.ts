import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('seasons')
class Season {
    @PrimaryColumn()
      id: string;

    @Column()
      title: string;

    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }  
}

export { Season };