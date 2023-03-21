import { Context, Next } from 'koa'
import { AuthenticationService, SpotifyService, TokenService } from '../../../domain/services'
import { UserService } from '../../../domain/services/user-service'

type KoaHandler = (ctx: Context, next?: Next) => Promise<void>

interface V1RouterDependencies {
  authenticationService: AuthenticationService
  spotifyService: SpotifyService
  tokenService: TokenService
  userService: UserService
}

type AuthenticationHandler = {
  login: KoaHandler
}

type UserHandler = {
  create: KoaHandler
  getById: KoaHandler
  getBySpotifyId: KoaHandler
}

type PlayerHandler = {
  play: KoaHandler
  pause: KoaHandler
  getQueue: KoaHandler
}

type TrackerHandler = {
  searchTracks: KoaHandler
}

type ApiHandlers = AuthenticationHandler & UserHandler & PlayerHandler & TrackerHandler

export { ApiHandlers, V1RouterDependencies, AuthenticationHandler, UserHandler, PlayerHandler, TrackerHandler }
