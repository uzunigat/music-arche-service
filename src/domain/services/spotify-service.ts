import { mapToTokenDomain } from '../../spi/repositories/util'
import { Token } from '../model'
import { SpotifyRepository } from '../spi-ports'
import { TokenRepository } from '../spi-ports/token-repository'

interface SpotifyServiceRepositories {
  spotify: SpotifyRepository
  token: TokenRepository
}
class SpotifyService {
  constructor(private repositories: SpotifyServiceRepositories) {}

  async getUser(token: Token) {
    return await this.repositories.spotify.getUser(token)
  }

  async play(tokenId: string) {
    const token = await this.repositories.token.getToken(tokenId)
    await this.repositories.spotify.play(token)
  }

  async pause(tokenId: string) {
    const token = await this.repositories.token.getToken(tokenId)
    await this.repositories.spotify.pause(token)
  }
}

export { SpotifyService }
