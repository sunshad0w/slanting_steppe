import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1679026308386 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO users (username, email, password)
      VALUES ('admin', 'admin@ss.ru', '$2a$10$SP8s0xdx1aAlJgFobXEMbuZDTenRQqOKODhMbGda6f8R9tyaKbobW')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM users WHERE username = 'admin'
    `);
  }
}
