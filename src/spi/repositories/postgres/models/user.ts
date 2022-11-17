interface User {
  id: string
  display_name: string
  token_id: string
  spotify_id: string
  external_urls_spotify: string
  followers_href: unknown | null
  followers_total: number
  href: string
  type: string
  uri: string
  image_url: string
  created_at: Date
  updated_at: Date
}

type EphemeralUser = Omit<User, 'id' | 'created_at' | 'updated_at'>

export { User, EphemeralUser }
