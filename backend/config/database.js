module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-52-22-216-69.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd8alf75tndhic8'),
        username: env('DATABASE_USERNAME', 'lbmhutmnkbhxhk'),
        password: env('DATABASE_PASSWORD', '7def99131b6e8850eb153e9746c4edcb20f308a5f8e8ef6597894375756b0628'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
