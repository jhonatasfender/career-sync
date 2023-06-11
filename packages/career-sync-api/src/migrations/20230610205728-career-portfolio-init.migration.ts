/* eslint-disable max-lines-per-function */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCareerPortfolioInit20230610205728
  implements MigrationInterface
{
  private readonly tableName = 'career_portfolio';

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (await queryRunner.hasTable(this.tableName)) {
      return;
    }

    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'portfolio_link',
            type: 'varchar',
          },
          {
            name: 'github_link',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
