import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Subscriber } from "./entities/Subscribers";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  await orm.getMigrator().up();

  const subscriber = orm.em.create(Subscriber, {
    name: "bob",
    email: "bob@bob.com",
  });

  await orm.em.persistAndFlush(subscriber);
};

main().catch((err) => {
  console.log("err", err);
});
