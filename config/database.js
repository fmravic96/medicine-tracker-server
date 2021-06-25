module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        host: env("DATABASE_HOST", process.env.DATABASE_HOST),
        port: env.int("DATABASE_PORT", 27017),
        srv: env.bool("DATABASE_SRV", true),
        database: env("DATABASE_NAME", process.env.DATABASE_NAME),
        username: env("DATABASE_USERNAME", process.env.DATABASE_USERNAME),
        password: env("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", "admin"),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
