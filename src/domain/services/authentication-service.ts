import { AuthenticationQuery } from '../api-ports'
import { AuthenticationRepository } from '../spi-ports/authentication-repository'
import { Context } from 'koa'

class AuthenticationService {
  constructor(private repository: AuthenticationRepository) {}

  async authenticate(ctx: Context): Promise<any> {
    return this.repository.authenticate(ctx)
  }

  async getToken(code: string, ctx: Context) {
    return this.repository.getToken(code, ctx)
  }
}

export { AuthenticationService }
