interface Token {
  id: string
  accessToken: string
  refreshToken: string
  tokenType: string
  scope: string
  expiresIn: number
  expiresAt: Date
  createdAt: Date
  updatedAt: Date
}

type PersistedToken = Token

export { Token, PersistedToken }
