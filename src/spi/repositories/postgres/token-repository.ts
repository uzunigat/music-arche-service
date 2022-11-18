import { PersistedToken, Token } from '../../../domain/model'
import * as dbModels from './models'

import { Knex } from 'knex'
import { TokenRepository as SPITokenRepository } from '../../../domain/spi-ports/token-repository'
import { KnexDatabaseConnection } from './knex-database-connection'
import { EphemeralToken } from '../../../domain/spi-ports/token-dtos'
import { mapToTokenDB, mapToTokenDomain } from '../util'

class TokenRepository implements SPITokenRepository {
  private tokentable = 'tokens'

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

  async getToken(tokenId: string): Promise<Token> {
    const [token] = await this.db.client.table(this.tokentable).where({ id: tokenId }).returning<dbModels.Token[]>('*')
    const mapedToken = mapToTokenDomain(token)
    return mapedToken
  }
}

export { TokenRepository }
