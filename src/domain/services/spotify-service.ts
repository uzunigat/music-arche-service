import { isExpired } from '../../utils/expired-date-token'
import { Token } from '../model'
import { SpotifyRepository } from '../spi-ports'
import { AuthenticationRepository } from '../spi-ports/authentication-repository'
import { TokenRepository } from '../spi-ports/token-repository'

interface SpotifyServiceRepositories {
  spotify: SpotifyRepository
  token: TokenRepository
  authentication: AuthenticationRepository
}
class SpotifyService {
  constructor(private repositories: SpotifyServiceRepositories) {}

  async getUser(token: Token) {
    return await this.repositories.spotify.getUser(token)
  }

  async play(tokenId: string) {
    const token = await this.repositories.token.getToken(tokenId)
    if (isExpired(token.expiresAt)) {
      const refreshedToken = await this.repositories.authentication.refreshToken(token)
      await this.repositories.token.updateToken(token.id, refreshedToken)
      return await this.repositories.spotify.play(refreshedToken)
    }
    return await this.repositories.spotify.play(token)
  }

  async pause(tokenId: string) {
    const token = await this.repositories.token.getToken(tokenId)
    if (isExpired(token.expiresAt)) {
      const refreshedToken = await this.repositories.authentication.refreshToken(token)
      await this.repositories.token.updateToken(token.id, refreshedToken)
      return await this.repositories.spotify.pause(refreshedToken)
    }
    await this.repositories.spotify.pause(token)
  }

  async getQueue(tokenId: string) {
    const token = await this.repositories.token.getToken(tokenId)
    if (isExpired(token.expiresAt)) {
      const refreshedToken = await this.repositories.authentication.refreshToken(token)
      await this.repositories.token.updateToken(token.id, refreshedToken)
      return await this.repositories.spotify.getQueue(refreshedToken)
    }
    return await this.repositories.spotify.getQueue(token)
  }

  async searchTracks(tokenId: string, searchQuery: string) {
    const token = await this.repositories.token.getToken(tokenId)
    if (isExpired(token.expiresAt)) {
      const refreshedToken = await this.repositories.authentication.refreshToken(token)
      await this.repositories.token.updateToken(token.id, refreshedToken)
      return await this.repositories.spotify.searchTracks(refreshedToken, searchQuery)
    }
    return await this.repositories.spotify.searchTracks(token, searchQuery)
  }
}

export { SpotifyService }
