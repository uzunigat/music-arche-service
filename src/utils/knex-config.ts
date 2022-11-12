import config from '../config/config-vars'

export const dbOptions = {
  client: 'pg',
  connection: (): Record<string, unknown> => ({
    host: config.get('db').host,
    port: config.get('db').port,
    database: config.get('db').database,
    user: config.get('db').user,
    password: config.get('db').password
  }),
  pool: { min: 1, max: 10 },
  migrations: {
    directory: `${__dirname}/../spi/repositories/postgres/migrations/`,
    tableName: 'knex_migrations'
  }
}
