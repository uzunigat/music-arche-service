import { PersistedToken, Token } from '../model'

interface TokenRepository {
  saveToken(token: Token): Promise<PersistedToken>
}

export { TokenRepository }
