import { SpotifyRepository as SPISpotifyRepository } from '../../../domain/spi-ports/spotify-repository'
import fetch from 'node-fetch'
import { Token, UserSpotify } from '../../../domain/model'
import camelcaseKeys from 'camelcase-keys'
import config from '../../../config/config-vars'
import { URLSearchParams } from 'url'
import { type } from 'os'
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

  async play(token: Token): Promise<void> {
    const response = await fetch('https://api.spotify.com/v1/me/player/play', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  }

  async pause(token: Token): Promise<void> {
    const response = await fetch(config.get('spotify').spotifyApi.pause, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  }

  async searchTracks(token: Token, searchQuery: string): Promise<any> {
    const response = await fetch(
      `${config.get('spotify').spotifyApi.search}?` +
        new URLSearchParams({
          q: searchQuery,
          type: 'track',
          limit: '10'
        }),
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    )

    const obj = (await response.json()) as any
    return obj.tracks.items
  }
}

export { SpotifyRepository }
