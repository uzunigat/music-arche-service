import { User } from '../../../../domain/model'

type SpotifyUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

export { SpotifyUser }
