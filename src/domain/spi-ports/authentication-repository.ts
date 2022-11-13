import { Context } from 'koa'
import { ResponseToken } from '../../spi/repositories/spotify/models/reponse-token'

interface AuthenticationRepository {
  getToken(code: string): Promise<ResponseToken>
}

export { AuthenticationRepository }
