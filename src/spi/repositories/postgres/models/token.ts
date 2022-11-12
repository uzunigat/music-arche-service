interface Token {
  id: string
  access_token: string
  token_type: string
  expires_in: string
  scope: string
  created_at: Date
}

type EphemeralToken = Omit<Token, 'id' | 'created_at'>

export { Token, EphemeralToken }
