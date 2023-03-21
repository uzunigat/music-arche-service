import Router from '@koa/router'
import { RouteParameters } from './constants'
import { makeHandlers } from './handlers'
import { V1RouterDependencies } from './types'
import { version } from './version'

const baseApiRoute = `/api/${version}`
const baseAuthenticationRoute = `${baseApiRoute}/auth`
const baseUserRoute = `${baseApiRoute}/user`
const basePlayerRoute = `${baseApiRoute}/player`
const baseTrackRoute = `${baseApiRoute}/search`

const makeApiRouterV1 = (dependencies: V1RouterDependencies): Router => {
  const router = new Router()
  const handlers = makeHandlers(dependencies)

  // Authentication Route
  router.get(`${baseAuthenticationRoute}`, handlers.login)

  // User Route
  router.post(`${baseUserRoute}`, handlers.create)
  router.get(`${baseUserRoute}/:${RouteParameters.SPOTIFY_ID}`, handlers.getBySpotifyId)

  // Player Route
  router.put(`${basePlayerRoute}/:${RouteParameters.TOKEN_ID}/play`, handlers.play)
  router.put(`${basePlayerRoute}/:${RouteParameters.TOKEN_ID}/pause`, handlers.pause)
  router.get(`${basePlayerRoute}/:${RouteParameters.TOKEN_ID}/queue`, handlers.getQueue)

  // Track Route
  router.get(`${baseTrackRoute}/:${RouteParameters.SEARCH_QUERY}/:${RouteParameters.TOKEN_ID}`, handlers.searchTracks)

  return router
}

export { makeApiRouterV1 }
