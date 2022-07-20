import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AddMovie1658308724298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase('nodereactmovies', true);
        await queryRunner.createTable(
            new Table({
                name: "movie",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
        await queryRunner.query("INSERT INTO `movie` (`title`, `description`) VALUES (?, ?);", ['xzs','fffff']);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movie', true);
    }

}
