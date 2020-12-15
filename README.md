Quick notes :

//To create db schema :
npx mikro-orm migration:create

// Native insert mikrp-Orm :
await orm.em.nativeInsert(Post, {title: "toto!"});
