import { SpotifyCredentials } from '../spi/repositories/spotify/models'

export interface AppConfig {
  name: string
  port: number
  appEnv: string
  nodeEnv: string
}

export interface DatabaseConfig {
  host: string
  database: string
  port: number
  user: string
  password: string
}

export interface SpotifyApiConfig {
  currentUserProfile: string
  play: string
  pause: string
  search: string
}

export interface SpotifyConfig {
  credentials: SpotifyCredentials
  redirectUri: string
  tokenUri: string
  spotifyApi: SpotifyApiConfig
}

export interface Config {
  app: AppConfig
  db: DatabaseConfig
  spotify: SpotifyConfig
}
