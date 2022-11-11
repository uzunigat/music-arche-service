import convict from 'convict';
import { Config } from './interfaces';

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
      default: 'https://accounts.spotify.com/api/token',
      type: String,
      env: 'SPOTIFY_TOKEN_URI'
    }
  }
});
