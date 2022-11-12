import { Context, Next } from 'koa'
import { AuthenticationService } from '../../../domain/services'

type KoaHandler = (ctx: Context, next?: Next) => Promise<void>

interface V1RouterDependencies {
  authenticationService: AuthenticationService
}

type AuthenticationHandler = {
  getToken: KoaHandler
}

type ApiHandlers = AuthenticationHandler

export { ApiHandlers, V1RouterDependencies, AuthenticationHandler }
