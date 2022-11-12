import { PersistedToken, Token } from '../../../domain/model'
import { Knex } from 'knex'
import { TokenRepository as SPITokenRepository } from '../../../domain/spi-ports/token-repository'
import { KnexDatabaseConnection } from './knex-database-connection'
import { EphemeralToken } from '../../../domain/spi-ports/token-dtos'
import { mapToTokenDB } from '../util'

class TokenRepository implements SPITokenRepository {
  private tokentable = 'token'

  constructor(private db: KnexDatabaseConnection) {}

  createTransaction(): Promise<Knex.Transaction> {
    return this.db.client.transaction()
  }

  async saveToken(ephemeraltoken: EphemeralToken, outsideTrx?: Knex.Transaction): Promise<PersistedToken> {
    const trx = outsideTrx || (await this.createTransaction())

    const ephemeraltokenDB = mapToTokenDB(ephemeraltoken)
    const [createdToken] = await trx.table(this.tokentable).insert(ephemeraltokenDB).returning<Token[]>('*')

    if (!outsideTrx) await trx.commit()

    return createdToken
  }
}

export { TokenRepository }
