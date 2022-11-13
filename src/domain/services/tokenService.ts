import { Token } from '../model'
import { TokenRepository } from '../spi-ports/token-repository'

interface TokenServiceRepositories {
  token: TokenRepository
}
class TokenService {
  constructor(private repositories: TokenServiceRepositories) {}

  async saveToken(token: Token) {
    return await this.repositories.token.saveToken(token)
  }
}

export { TokenService }
