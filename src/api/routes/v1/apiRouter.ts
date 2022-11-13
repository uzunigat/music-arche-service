import Router from '@koa/router'
import { RouteParameters } from './constants'
import { makeHandlers } from './handlers'
import { V1RouterDependencies } from './types'
import { version } from './version'

const baseApiRoute = `/api/${version}`
const baseAuthenticationRoute = `${baseApiRoute}/auth`
const baseUserRoute = `${baseApiRoute}/user`

const makeApiRouterV1 = (dependencies: V1RouterDependencies): Router => {
  const router = new Router()
  const handlers = makeHandlers(dependencies)

  // Authentication Route
  router.get(`${baseAuthenticationRoute}`, handlers.login)

  // User Route
  router.post(`${baseUserRoute}`, handlers.create)
  router.get(`${baseUserRoute}/:${RouteParameters.TOKEN_ID}`, handlers.getByTokenId)

  return router
}

export { makeApiRouterV1 }
