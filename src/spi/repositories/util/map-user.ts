import { EphemeralUser } from '../../../domain/spi-ports/user-dtos'
import * as dbModels from '../postgres/models'
import { User, UserSpotify } from '../../../domain/model'

const mapToUserDomain = (user: dbModels.User): User => ({
  id: user.id,
  displayName: user.display_name,
  spotifyId: user.spotify_id,
  tokenId: user.token_id,
  externalUrlSpotify: user.external_urls_spotify,
  followersHref: user.followers_href,
  followersTotal: user.followers_total,
  href: user.href,
  type: user.type,
  uri: user.uri,
  imagesUrl: user.image_url,
  createdAt: user.created_at,
  updatedAt: user.updated_at
})

const mapToUserDB = (user: EphemeralUser): dbModels.EphemeralUser => ({
  display_name: user.displayName,
  spotify_id: user.spotifyId,
  token_id: user.tokenId,
  external_urls_spotify: user.externalUrlSpotify,
  followers_href: user.followersHref,
  followers_total: user.followersTotal,
  href: user.href,
  type: user.type,
  uri: user.uri,
  image_url: user.imagesUrl
})

const mapUserFromSpotifyToDomain = (user: UserSpotify, tokenId: string): User => ({
  displayName: user.displayName,
  spotifyId: user.id,
  externalUrlSpotify: user.images[0].url,
  followersHref: user.followers.href,
  followersTotal: user.followers.total,
  href: user.href,
  type: user.type,
  tokenId: tokenId,
  uri: user.uri,
  imagesUrl: user.images[0].url
})

export { mapToUserDomain, mapToUserDB, mapUserFromSpotifyToDomain }
