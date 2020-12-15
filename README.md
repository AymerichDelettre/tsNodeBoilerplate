Quick notes :

//To run:
Terminal 1 (compile ts into js code for faster execution) : npm run watch  
Terminal 2 (run nodemon for hot refreshes) : npm run dev

//To create db schema :
npx mikro-orm migration:create (--run)

// Native insert mikrp-Orm :
await orm.em.nativeInsert(Post, {title: "toto!"});

//Mikro-orm example :
const post = orm.em.create(Post, { title: "First Post !" });
await orm.em.persistAndFlush(post);

const posts = await orm.em.find(Post, {});
console.log(posts);
