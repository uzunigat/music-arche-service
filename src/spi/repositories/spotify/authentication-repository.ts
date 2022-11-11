import configVars from '../../../config'
import { AuthenticationRepository as SPIAuthenticationRepository } from '../../../domain/spi-ports/authentication-repository'
import fetch from 'node-fetch'
import { Context } from 'koa'
import querystring from 'querystring'
import { scopes } from './constants'

class AuthenticationRepository implements SPIAuthenticationRepository {
  async authenticate(ctx: Context) {
    await this.getAuthorizationCode(ctx)
  }

  async getToken(code: string, ctx: Context) {
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
      const responseJson = await response.json()

      console.log(`responseJSON: `, responseJson)

      ctx.redirect('http://localhost:3002')
    } catch (err) {
      console.error(err)
    }
  }

  getAuthorizationCode = async (ctx: Context) => {
    try {
      const credentials = configVars.get('spotify').credentials
      const redirectUri = `${configVars.get('spotify').redirectUri}`
      ctx.redirect(
        'https://accounts.spotify.com/authorize?' +
          querystring.stringify({
            response_type: 'code',
            client_id: credentials.clientId,
            scope: scopes,
            redirect_uri: redirectUri
          })
      )
    } catch (err) {
      console.error(err)
    }
  }
}

export { AuthenticationRepository }
