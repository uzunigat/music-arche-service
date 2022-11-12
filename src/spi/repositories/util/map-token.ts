import { Token } from '../../../domain/model'
import { EphemeralToken } from '../../../domain/spi-ports/token-dtos'
import * as dbModels from '../postgres/models'

const mapToTokenDomain = (token: dbModels.Token): Token => ({
  id: token.id,
  accessToken: token.access_token,
  tokenType: token.token_type,
  expiresIn: token.expires_in,
  scope: token.scope,
  createdAt: token.created_at
})

const mapToTokenDB = (token: EphemeralToken): dbModels.EphemeralToken => ({
  access_token: token.accessToken,
  token_type: token.tokenType,
  expires_in: token.expiresIn,
  scope: token.scope
})

export { mapToTokenDomain, mapToTokenDB }
