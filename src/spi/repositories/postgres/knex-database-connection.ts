import { Knex, knex } from 'knex'
import { DatabaseConfig } from '../../../config'

export class KnexDatabaseConnection {
  public client!: Knex

  connect(config: DatabaseConfig) {
    try {
      this.client = knex({
        client: 'pg',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password
        },
        pool: { min: 0, max: 100 },
        migrations: { directory: `${__dirname}/migrations`, tableName: 'knex_migrations' }
      })
    } catch (err: any) {
      console.error(err)
    }
  }

  async getPoolInfo() {
    try {
      const { pool } = this.client.client as Knex.Client

      return {
        used: pool?.numUsed(),
        free: pool?.numFree(),
        pendingAcquires: pool?.numPendingAcquires(),
        pendingCreates: pool?.numPendingCreates()
      }
    } catch (err: any) {
      console.error(err, new Error('Unexpected error occured when getting connection pool info'))
      return {}
    }
  }

  async isConnected(): Promise<boolean> {
    try {
      await this.client.raw('SELECT NOW();')
      return true
    } catch (err: any) {
      console.error(err)
      return false
    }
  }

  async close(): Promise<boolean> {
    console.log('Attempting to gracefully close database connection.')
    await this.client.destroy()
    return true
  }

  async runMigrations(): Promise<void> {
    await this.client.migrate.latest()
    console.log('Successfully migrated database.')
  }
}
