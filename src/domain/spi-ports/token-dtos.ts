import { Token } from '../model'

type EphemeralToken = Omit<Token, 'id' | 'createdAt'>

export { EphemeralToken }
