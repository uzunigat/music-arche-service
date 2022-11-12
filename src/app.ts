import { makeApiRouterV1, makeApp } from './api'
import { loadConfig } from './config'
import { AuthenticationService } from './domain/services'
import { AuthenticationRepository } from './spi'
import cors from '@koa/cors'
import { TokenRepository } from './spi/repositories/postgres/token-repository'
import { KnexDatabaseConnection } from './spi/repositories/postgres'

const runApplication = async () => {
  // Get config
  const config = await loadConfig()

  // Start Database
  const db = new KnexDatabaseConnection()
  await db.connect(config.get('db'))
  await db.runMigrations()

  // Create Koa app instance
  const app = await makeApp()

  // Create Repositories
  const authenticationRepository = new AuthenticationRepository()
  const tokenRepository = new TokenRepository(db)

  // Create Services
  const authenticationService = new AuthenticationService({
    authentication: authenticationRepository,
    token: tokenRepository
  })

  // Make Api Versiob Routes (v1, v2, ...)
  const routerApiV1 = makeApiRouterV1({ authenticationService })

  // Middlewares
  app.use(cors())

  // Use Routes
  app.use(routerApiV1.routes())

  // Open server on Port
  const server = await app.listen(config.get('app').port, () => console.log(`Koa Started on port ${config.get('app').port}`))
}

export { runApplication }
