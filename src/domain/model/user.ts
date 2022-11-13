interface User {
  id: string
  displayName: string
  spotifyId: string
  tokenId: string
  href: string
  createdAt: Date
  updatedAt: Date
}

type PersistedUser = User

export { User, PersistedUser }
