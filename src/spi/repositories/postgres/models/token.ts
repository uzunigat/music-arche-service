interface Token {
  id: string
  access_token: string
  token_type: string
  refresh_token: string
  scope: string
  expires_in: number
  expires_at: Date
  created_at: Date
  updated_at: Date
}

type EphemeralToken = Omit<Token, 'id' | 'created_at' | 'updated_at'>

export { Token, EphemeralToken }
