import { Token } from '../model'
import { SpotifyRepository } from '../spi-ports'

interface SpotifyServiceRepositories {
  spotify: SpotifyRepository
}
class SpotifyService {
  constructor(private repositories: SpotifyServiceRepositories) {}

  async getUser(token: Token) {
    return await this.repositories.spotify.getUser(token)
  }
}

export { SpotifyService }
