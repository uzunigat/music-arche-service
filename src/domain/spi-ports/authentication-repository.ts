import { AuthenticationQuery } from '../api-ports'
import { Context } from 'koa'

interface AuthenticationRepository {
  authenticate(ctx: Context): Promise<any>
  getToken(code: string, ctx: Context): any
}

export { AuthenticationRepository }
