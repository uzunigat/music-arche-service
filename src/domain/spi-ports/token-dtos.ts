import { Token } from '../model'

type EphemeralToken = Omit<Token, 'id' | 'createdAt' | 'updated_at'>

export { EphemeralToken }
