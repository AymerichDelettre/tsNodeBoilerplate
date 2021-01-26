Backend boilerplate including user login, register and password change.
Stack : Typerscript, GraphQL, Apollo, Type-ORM, Redis, PostgreSQL.

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

1:41:15

For sessions, we'll need to have a Redis server in which we're going to store our sessions.

To install a redis server on windows :

1. Enable WSL in the windows optional features
2. Install Ubuntu (18.04) because 20.04 have a known issue
3. In Ubuntu :
   > sudo apt-get update
   > sudo apt-get upgrade
   > sudo apt-get install redis-server
   > redis-cli -v
4. Restart the service to make sure it's running
   > sudo service redis-server restart
5. [Optional] If you want to test your service :
   > $ redis-cli
   > set user:1 "Oscar"
   > get user:1
   > Output = "Oscar"
6. To stop the server :
   > sudo service redis-server stop
