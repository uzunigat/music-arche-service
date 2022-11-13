import { Token, User } from '../model'

interface SpotifyRepository {
  getUser(token: Token): Promise<User>
}

export { SpotifyRepository }
