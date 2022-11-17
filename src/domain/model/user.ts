interface User {
  id?: string
  displayName: string
  tokenId: string
  spotifyId: string
  externalUrlSpotify: string
  followersHref: unknown | null
  followersTotal: number
  href: string
  type: string
  uri: string
  imagesUrl: string
  createdAt?: Date
  updatedAt?: Date
}

type PersistedUser = User

export { User, PersistedUser }
