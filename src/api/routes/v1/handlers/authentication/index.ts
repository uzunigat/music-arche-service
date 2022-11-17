import { AuthenticationHandler } from '../../types'
import { Context } from 'koa'
import { AuthenticationService, SpotifyService, TokenService } from '../../../../../domain/services'
import fetch from 'node-fetch'
interface HandlerDependencies {
  authenticationService: AuthenticationService
  spotifyService: SpotifyService
  tokenService: TokenService
}

const makeAuthenticationV1Handlers = (dependencies: HandlerDependencies): AuthenticationHandler => ({
  login: async (ctx: Context) => {
    const { code } = ctx.query
    try {
      const token = await dependencies.authenticationService.getToken(code as string)
      const persistedToken = await dependencies.tokenService.saveToken(token)
      const user = await dependencies.spotifyService.getUser(token)
      await fetch('http://localhost:3000/api/v1/user', {
        method: 'POST',
        body: JSON.stringify({
          user,
          tokenId: persistedToken.id
        }),
        headers: { 'Content-Type': 'application/json' }
      })

      ctx.redirect(`exp://192.168.1.14:19000?accessTokenId=${persistedToken.id}&userId=${user.id}`)
    } catch (e) {
      console.error(e)
      throw e
    }
  }
})

export { makeAuthenticationV1Handlers }
