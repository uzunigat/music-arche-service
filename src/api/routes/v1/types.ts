import { Context, Next } from 'koa'
import { AuthenticationService, SpotifyService, TokenService } from '../../../domain/services'

type KoaHandler = (ctx: Context, next?: Next) => Promise<void>

interface V1RouterDependencies {
  authenticationService: AuthenticationService
  spotifyService: SpotifyService
  tokenService: TokenService
}

type AuthenticationHandler = {
  getToken: KoaHandler
}

type ApiHandlers = AuthenticationHandler

export { ApiHandlers, V1RouterDependencies, AuthenticationHandler }
