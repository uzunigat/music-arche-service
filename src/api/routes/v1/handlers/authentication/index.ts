import { AuthenticationHandler } from '../../types';
import { Context } from 'koa';

const makeAuthenticationV1Handlers = (): AuthenticationHandler => ({
  authenticate: async (ctx: Context) => {
    console.log('Authenticating...');
  }
});

export { makeAuthenticationV1Handlers };
