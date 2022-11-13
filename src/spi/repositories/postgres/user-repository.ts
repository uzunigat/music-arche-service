import { Knex } from 'knex'
import { UserRepository as SPIUserRepository } from '../../../domain/spi-ports/user-repository'
import { KnexDatabaseConnection } from './knex-database-connection'
import { EphemeralUser } from '../../../domain/spi-ports/user-dtos'
import { mapToUserDB, mapToUserDomain } from '../util/map-user'
import { User } from '../../../domain/model'
import { PersistedUser } from '../../../domain/model'
import * as dbModels from '../postgres/models'

class UserRepository implements SPIUserRepository {
  private userTable = 'users'

  constructor(private db: KnexDatabaseConnection) {}

  createTransaction(): Promise<Knex.Transaction> {
    return this.db.client.transaction()
  }

  async create(ephemeralUser: EphemeralUser, outsideTrx?: Knex.Transaction): Promise<PersistedUser> {
    const trx = outsideTrx || (await this.createTransaction())

    const ephemeralUserDB = mapToUserDB(ephemeralUser)
    const [createdUser] = await trx.table(this.userTable).insert(ephemeralUserDB).returning<User[]>('*')

    if (!outsideTrx) await trx.commit()

    return createdUser
  }

  async getUserByTokenId(tokenId: string, outsideTrx?: Knex.Transaction): Promise<PersistedUser> {
    const trx = outsideTrx || (await this.createTransaction())

    const [user] = await trx.table(this.userTable).select('*').where('token_id', tokenId)
    const mapeduser = mapToUserDomain(user)

    if (!outsideTrx) await trx.commit()

    return mapeduser
  }
}

export { UserRepository }
