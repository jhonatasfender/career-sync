import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLanguageTableInit implements MigrationInterface {
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('language');
  }
}
