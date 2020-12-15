import { Connection, EntityManager, IDatabaseDriver } from "mikro-orm";

export type MyContext {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}