import { SpotifyCredentials } from '../spi/repositories/spotify/models'

export interface AppConfig {
  name: string
  port: number
  appEnv: string
  nodeEnv: string
}

export interface SpotifyConfig {
  credentials: SpotifyCredentials
  redirectUri: string
  tokenUri: string
}

export interface Config {
  app: AppConfig
  spotify: SpotifyConfig
}
