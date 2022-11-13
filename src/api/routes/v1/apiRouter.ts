import Router from '@koa/router'
import { makeHandlers } from './handlers'
import { V1RouterDependencies } from './types'
import { version } from './version'

const baseApiRoute = `/api/${version}`
const baseAuthenticationRoute = `${baseApiRoute}/auth`
const baseUserRoute = `${baseApiRoute}/user`

const makeApiRouterV1 = (dependencies: V1RouterDependencies): Router => {
  const router = new Router()
  const handlers = makeHandlers(dependencies)

  router.get(`${baseAuthenticationRoute}`, handlers.login)
  router.post(`${baseUserRoute}`, handlers.create)

  return router
}

export { makeApiRouterV1 }
