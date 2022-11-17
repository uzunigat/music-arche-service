import { SpotifyRepository as SPISpotifyRepository } from '../../../domain/spi-ports/spotify-repository'
import fetch from 'node-fetch'
import { Token, UserSpotify } from '../../../domain/model'
import camelcaseKeys from 'camelcase-keys'
import config from '../../../config/config-vars'
class SpotifyRepository implements SPISpotifyRepository {
  async getUser(token: Token): Promise<UserSpotify> {
    const response = await fetch(config.get('spotify').spotifyApi.currentUserProfile, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    const spotifyUser = camelcaseKeys(await response.json()) as UserSpotify
    return spotifyUser
  }
}

export { SpotifyRepository }
