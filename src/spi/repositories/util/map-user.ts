import { EphemeralUser } from '../../../domain/spi-ports/user-dtos'
import * as dbModels from '../postgres/models'
import { User } from '../../../domain/model'

const mapToUserDomain = (user: dbModels.User): User => ({
  id: user.id,
  tokenId: user.token_id,
  href: user.href,
  spotifyId: user.spotify_id,
  createdAt: user.created_at,
  updatedAt: user.updated_at
})

const mapToUserDB = (user: EphemeralUser): dbModels.EphemeralUser => ({
  href: user.href,
  spotify_id: user.spotifyId,
  token_id: user.tokenId
})

export { mapToUserDomain, mapToUserDB }
