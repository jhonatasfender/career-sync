/* eslint-disable max-lines-per-function */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateLanguageInit implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'language',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'presentation',
            type: 'text',
          },
          {
            name: 'lang',
            type: 'varchar',
            length: '5',
          },
          {
            name: 'careerPortfolioId',
            type: 'integer',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'language',
      new TableForeignKey({
        columnNames: ['careerPortfolioId'],
        referencedTableName: 'career_portfolio',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('language');
    const foreignKey = table.foreignKeys.find((fk) =>
      fk.columnNames.includes('careerPortfolioId')
    );
    await queryRunner.dropForeignKey('language', foreignKey);
    await queryRunner.dropTable('language');
  }
}
