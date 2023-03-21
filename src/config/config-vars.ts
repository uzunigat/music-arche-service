import convict from 'convict'
import { Config } from './interfaces'

export default convict<Config>({
  app: {
    name: {
      format: String,
      default: 'music-arche-service'
    },
    port: {
      format: Number,
      default: 3000,
      env: 'APP_PORT'
    },
    appEnv: {
      format: ['production', 'staging', 'testing', 'development'],
      default: 'development',
      env: 'APP_ENV'
    },
    nodeEnv: {
      format: ['production', 'development', 'test'],
      default: 'development',
      env: 'NODE_ENV'
    }
  },
  db: {
    host: {
      format: String,
      env: 'RDS_HOST',
      default: 'localhost'
    },
    database: {
      format: String,
      env: 'RDS_DBNAME',
      default: 'pedify'
    },
    port: {
      format: Number,
      env: 'RDS_PORT',
      default: 5432
    },
    user: {
      format: String,
      env: 'RDS_USERNAME',
      default: 'username'
    },
    password: {
      format: String,
      env: 'RDS_PASSWORD',
      default: 'password'
    }
  },
  spotify: {
    credentials: {
      clientId: {
        default: '',
        type: String,
        env: 'SPOTIFY_CLIENT_ID'
      },
      clientSecret: {
        default: '',
        type: String,
        env: 'SPOTIFY_CLIENT_SECRET'
      }
    },
    redirectUri: {
      default: '',
      type: String,
      env: 'SPOTIFY_REDIRECT_URI'
    },
    tokenUri: {
      default: 'https://accounts.spotify.com/api/auth',
      type: String,
      env: 'SPOTIFY_TOKEN_URI'
    },
    spotifyApi: {
      currentUserProfile: {
        default: 'https://api.spotify.com/v1/me',
        type: String,
        env: 'SPOTIFY_CURRENT_USER_PROFILE'
      },
      play: {
        default: 'https://api.spotify.com/v1/me/player/pause',
        type: String,
        env: 'SPOTIFY_PLAYER_PLAY'
      },
      pause: {
        default: 'https://api.spotify.com/v1/me/player/pause',
        type: String,
        env: 'SPOTIFY_PLAYER_PAUSE'
      },
      queue: {
        default: 'https://api.spotify.com/v1/me/player/queue',
        type: String,
        env: 'SPOTIFY_PLAYER_GET_QUEUE'
      },
      search: {
        default: 'https://api.spotify.com/v1/search',
        type: String,
        env: 'SPOTIFY_SEARCH'
      }
    }
  }
})
