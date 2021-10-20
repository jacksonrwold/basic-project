import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Subscriber {
  @PrimaryKey()
  id: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property()
  name!: string;

  @Property()
  email!: string;
}
