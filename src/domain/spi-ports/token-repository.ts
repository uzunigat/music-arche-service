import { PersistedToken, Token } from '../model'

interface TokenRepository {
  saveToken(token: Token): Promise<PersistedToken>
  getToken(tokenId: string): Promise<Token>
}

export { TokenRepository }
