import { Token, UserSpotify } from '../model'

interface SpotifyRepository {
  getUser(token: Token): Promise<UserSpotify>
}

export { SpotifyRepository }
