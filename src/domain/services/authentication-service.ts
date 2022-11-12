import { AuthenticationRepository } from '../spi-ports/authentication-repository'
import { Context } from 'koa'
import { TokenRepository } from '../spi-ports/token-repository'

interface AuthenticationServiceRepositories {
  authentication: AuthenticationRepository
  token: TokenRepository
}
class AuthenticationService {
  constructor(private repositories: AuthenticationServiceRepositories) {}

  async getToken(code: string, ctx: Context) {
    const token = await this.repositories.authentication.getToken(code, ctx)
    const persistedToken = await this.repositories.token.saveToken(token)
    ctx.redirect(`exp://192.168.1.14:19000?accessTokenId=${persistedToken.id}`)
  }
}

export { AuthenticationService }
