import { AuthenticationHandler } from '../../types'
import { Context } from 'koa'
import { AuthenticationService, SpotifyService, TokenService } from '../../../../../domain/services'
interface HandlerDependencies {
  authenticationService: AuthenticationService
  spotifyService: SpotifyService
  tokenService: TokenService
}

const makeAuthenticationV1Handlers = (dependencies: HandlerDependencies): AuthenticationHandler => ({
  getToken: async (ctx: Context) => {
    const { code } = ctx.query

    const token = await dependencies.authenticationService.getToken(code as string)

    const persistedToken = await dependencies.tokenService.saveToken(token)

    const user = await dependencies.spotifyService.getUser(token)

    ctx.redirect(`exp://192.168.1.14:19000?accessTokenId=${persistedToken.id}`)
  }
})

export { makeAuthenticationV1Handlers }
