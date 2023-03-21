import { Token } from '../../../domain/model'
import { EphemeralToken } from '../../../domain/spi-ports/token-dtos'
import * as dbModels from '../postgres/models'

const mapToTokenDomain = (token: dbModels.Token): Token => ({
  id: token.id,
  accessToken: token.access_token,
  tokenType: token.token_type,
  scope: token.scope,
  refreshToken: token.refresh_token,
  expiresIn: token.expires_in,
  expiresAt: token.expires_at,
  createdAt: token.created_at,
  updatedAt: token.updated_at
})

const mapToTokenDB = (token: EphemeralToken): dbModels.EphemeralToken => ({
  access_token: token.accessToken,
  refresh_token: token.refreshToken,
  token_type: token.tokenType,
  expires_in: token.expiresIn,
  expires_at: token.expiresAt,
  scope: token.scope
})

export { mapToTokenDomain, mapToTokenDB }
