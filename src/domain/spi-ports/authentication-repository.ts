import { ResponseToken } from '../../spi/repositories/spotify/models/reponse-token'
import { EphemeralToken } from './token-dtos'

interface AuthenticationRepository {
  getToken(code: string): Promise<ResponseToken>
  refreshToken(token: EphemeralToken): Promise<ResponseToken>
}

export { AuthenticationRepository }
