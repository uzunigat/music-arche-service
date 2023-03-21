import { PersistedUser } from '../model'
import { Knex } from 'knex'
import { EphemeralUser } from './user-dtos'

interface UserRepository {
  create(user: EphemeralUser, outsideTrx?: Knex.Transaction): Promise<PersistedUser>
  getById(id: string): Promise<PersistedUser>
  getBySpotifyId(spotifyId: string): Promise<PersistedUser | null>
  getByTokenId(token: string, outsideTrx?: Knex.Transaction): Promise<PersistedUser>
}

export { UserRepository }
