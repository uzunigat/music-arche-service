import { AuthenticationHandler } from '../../types'
import { Context } from 'koa'
import { AuthenticationService } from '../../../../../domain/services'
interface HandlerDependencies {
  authenticationService: AuthenticationService
}

const makeAuthenticationV1Handlers = (dependencies: HandlerDependencies): AuthenticationHandler => ({
  getToken: async (ctx: Context) => {
    const { code } = ctx.query

    await dependencies.authenticationService.getToken(code as string, ctx)
  }
})

export { makeAuthenticationV1Handlers }
