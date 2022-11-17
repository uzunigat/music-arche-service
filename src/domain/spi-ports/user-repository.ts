import { PersistedUser } from '../model'
import { Knex } from 'knex'
import { EphemeralUser } from './user-dtos'

interface UserRepository {
  create(user: EphemeralUser, outsideTrx?: Knex.Transaction): Promise<PersistedUser>
  getUserByTokenId(token: string, outsideTrx?: Knex.Transaction): Promise<PersistedUser>
}

export { UserRepository }
