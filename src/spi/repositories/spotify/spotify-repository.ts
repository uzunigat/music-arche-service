import { SpotifyRepository as SPISpotifyRepository } from '../../../domain/spi-ports/spotify-repository'
import fetch from 'node-fetch'
import { Token, User } from '../../../domain/model'
import camelcaseKeys from 'camelcase-keys'

const URI_CURRENT_USER_PROFILE = 'https://api.spotify.com/v1/me'

class SpotifyRepository implements SPISpotifyRepository {
  async getUser(token: Token): Promise<User> {
    const response = await fetch(URI_CURRENT_USER_PROFILE, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    const responseUser = camelcaseKeys(await response.json()) as User
    return responseUser
  }
}

export { SpotifyRepository }
