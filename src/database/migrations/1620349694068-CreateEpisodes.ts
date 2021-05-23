import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEpisodes1620349694068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'episodes',
                columns: [{
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                }, {
                    name: 'season_id',
                    type: 'uuid',
                }, {
                    name: 'number', 
                    type: 'int'
                }, {
                    name: 'title',
                    type: 'varchar'
                }, {
                    name: 'release_date',
                    type: 'varchar'
                }],
                foreignKeys: [{
                    name: 'FKSeason',
                    referencedTableName: 'seasons',
                    referencedColumnNames: ['id'],
                    columnNames: ['season_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'NO ACTION'
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('episodes')
    }

}
