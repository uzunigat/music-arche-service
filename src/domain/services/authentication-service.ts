import { AuthenticationRepository } from '../spi-ports/authentication-repository'

interface AuthenticationServiceRepositories {
  authentication: AuthenticationRepository
}
class AuthenticationService {
  constructor(private repositories: AuthenticationServiceRepositories) {}

  async getToken(code: string) {
    return await this.repositories.authentication.getToken(code)
  }
}

export { AuthenticationService }
