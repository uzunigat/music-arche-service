import { User } from '../model'
import { Token } from '../model'

interface SpotifyRepository {
  getUser(token: Token): Promise<User>
}

export { SpotifyRepository }
