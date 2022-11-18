import { Token, UserSpotify } from '../model'

interface SpotifyRepository {
  getUser(token: Token): Promise<UserSpotify>
  play(token: Token): Promise<void>
  pause(token: Token): Promise<void>
}

export { SpotifyRepository }
