import { Token } from '../../../domain/model'
import { TokenRepository as SPITokenRepository } from '../../../domain/spi-ports/token-repository'

class TokenRepository implements SPITokenRepository {
  async saveToken(token: Token) {
    console.log('Saving token', token)
  }
}

export { TokenRepository }
