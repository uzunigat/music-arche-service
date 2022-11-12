interface Token {
  id: string
  accessToken: string
  tokenType: string
  expiresIn: string
  scope: string
  createdAt: Date
}

type PersistedToken = Token

export { Token, PersistedToken }
