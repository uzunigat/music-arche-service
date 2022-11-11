import { makeApiRouterV1, makeApp } from './api'
import { loadConfig } from './config'
import { AuthenticationService } from './domain/services'
import { AuthenticationRepository } from './spi'
import cors from '@koa/cors'

const runApplication = async () => {
  // Get config
  const config = await loadConfig()

  // Create Koa app instance
  const app = await makeApp()

  // Create Repositories
  const authenticationRepository = new AuthenticationRepository()

  // Create Services
  const authenticationService = new AuthenticationService(authenticationRepository)

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
