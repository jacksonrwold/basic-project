import { Migration } from '@mikro-orm/migrations';

export class Migration20211020015852 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "subscriber" ("id" serial primary key, "created_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null);');

    this.addSql('drop table if exists "post" cascade;');

    this.addSql('drop table if exists "user" cascade;');
  }

}
