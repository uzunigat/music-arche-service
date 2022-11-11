import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

export const makeApp = (): Koa => {
  const app = new Koa()
  app.use(bodyParser())
  return app
}
