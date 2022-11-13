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
}

type ApiHandlers = AuthenticationHandler & UserHandler

export { ApiHandlers, V1RouterDependencies, AuthenticationHandler, UserHandler }
