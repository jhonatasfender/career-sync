/* eslint-disable max-lines-per-function */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateExperienceInit implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'experience',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'company_name',
            type: 'varchar',
          },
          {
            name: 'position',
            type: 'varchar',
          },
          {
            name: 'start_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'end_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'languageId',
            type: 'integer',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'experience',
      new TableForeignKey({
        columnNames: ['languageId'],
        referencedTableName: 'language',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('experience');
    const foreignKey = table.foreignKeys.find((fk) =>
      fk.columnNames.includes('languageId')
    );
    await queryRunner.dropForeignKey('experience', foreignKey);
    await queryRunner.dropTable('experience');
  }
}
