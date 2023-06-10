/* eslint-disable max-lines-per-function */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateAcademicExperienceInit implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'academic_experience',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'institution_name',
            type: 'varchar',
          },
          {
            name: 'course_name',
            type: 'varchar',
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
      'academic_experience',
      new TableForeignKey({
        columnNames: ['languageId'],
        referencedTableName: 'language',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('academic_experience');
    const foreignKey = table.foreignKeys.find((fk) =>
      fk.columnNames.includes('languageId')
    );
    await queryRunner.dropForeignKey('academic_experience', foreignKey);
    await queryRunner.dropTable('academic_experience');
  }
}
