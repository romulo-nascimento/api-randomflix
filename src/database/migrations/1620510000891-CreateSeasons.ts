import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSeasons1620510000891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'seasons',
                columns: [{
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                }, {
                    name: 'title',
                    type: 'varchar'
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('seasons')
    }

}
