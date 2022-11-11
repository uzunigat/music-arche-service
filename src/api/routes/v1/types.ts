import { Context, Next } from 'koa';

type KoaHandler = (ctx: Context, next?: Next) => Promise<void>;

type AuthenticationHandler = {
  authenticate: KoaHandler;
};

type ApiHandlers = AuthenticationHandler;

export { ApiHandlers, AuthenticationHandler };
