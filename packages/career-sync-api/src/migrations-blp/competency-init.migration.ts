/* eslint-disable max-lines-per-function */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCompetencyInit implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'competency',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'languageId',
            type: 'integer',
          },
          {
            name: 'parentCategoryId',
            type: 'integer',
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'competency',
      new TableForeignKey({
        columnNames: ['languageId'],
        referencedTableName: 'language',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'competency',
      new TableForeignKey({
        columnNames: ['parentCategoryId'],
        referencedTableName: 'competency',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createTable(
      new Table({
        name: 'competency_subcategories',
        columns: [
          {
            name: 'competencyId',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'subcategoryId',
            type: 'integer',
            isPrimary: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'competency_subcategories',
      new TableForeignKey({
        columnNames: ['competencyId'],
        referencedTableName: 'competency',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'competency_subcategories',
      new TableForeignKey({
        columnNames: ['subcategoryId'],
        referencedTableName: 'competency',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('competency_subcategories');
    await queryRunner.dropForeignKey(
      'competency',
      'competency_parentCategoryId'
    );
    await queryRunner.dropForeignKey('competency', 'competency_languageId');
    await queryRunner.dropTable('competency');
  }
}
