import { User } from '../model/'

type EphemeralUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

export { EphemeralUser }
