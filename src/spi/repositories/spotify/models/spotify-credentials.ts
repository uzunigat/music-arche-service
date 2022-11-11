interface SpotifyCredentials {
  clientId: string
  clientSecret: string
}

interface SpotifyResponseToken {
  access_token: string
  refresh_token: string
  expires_in: string
}

export { SpotifyCredentials, SpotifyResponseToken }
