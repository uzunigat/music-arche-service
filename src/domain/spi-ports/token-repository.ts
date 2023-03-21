import { PersistedToken, Token } from '../model'

interface TokenRepository {
  saveToken(token: Token): Promise<PersistedToken>
  getToken(tokenId: string): Promise<Token>
  updateToken(tokenId: string, token: Token): Promise<Token>
}

export { TokenRepository }
