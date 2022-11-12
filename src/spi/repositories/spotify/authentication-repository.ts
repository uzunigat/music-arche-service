import configVars from '../../../config'
import { AuthenticationRepository as SPIAuthenticationRepository } from '../../../domain/spi-ports/authentication-repository'
import fetch from 'node-fetch'
import { Context } from 'koa'
import camelcaseKeys from 'camelcase-keys'
import { ResponseToken } from './models/reponse-token'

class AuthenticationRepository implements SPIAuthenticationRepository {
  async getToken(code: string, ctx: Context): Promise<ResponseToken> {
    try {
      const credentials = configVars.get('spotify').credentials
      const credsB64 = btoa(`${credentials.clientId}:${credentials.clientSecret}`)
      const response = await fetch(configVars.get('spotify').tokenUri, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credsB64}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${configVars.get('spotify').redirectUri}`
      })
      const responseToken = camelcaseKeys(await response.json()) as ResponseToken
      return responseToken
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

export { AuthenticationRepository }
