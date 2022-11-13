interface User {
  id: string
  token_id: string
  spotify_id: string
  href: string
  created_at: Date
  updated_at: Date
}

type EphemeralUser = Omit<User, 'id' | 'created_at' | 'updated_at'>

export { User, EphemeralUser }
