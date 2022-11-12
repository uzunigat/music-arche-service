import { Context } from 'koa'
import { ResponseToken } from '../../spi/repositories/spotify/models/reponse-token'
import { Token } from '../model'

interface TokenRepository {
  saveToken(token: Token): void
}

export { TokenRepository }
