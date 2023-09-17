import { Migration } from '@mikro-orm/migrations';

export class Migration20230916162849_AddUniqueConstraintToTag extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `tag` add unique `tag_tag_unique`(`tag`);');
  }

  async down(): Promise<void> {
    this.addSql('alter table `tag` drop index `tag_tag_unique`;');
  }

}
