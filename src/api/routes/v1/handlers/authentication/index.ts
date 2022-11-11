import { AuthenticationHandler } from '../../types';
import { Context } from 'koa';
import { AuthenticationService } from '../../../../../domain/services';
import { urlQueryToApiQuery } from '../../util';
import { AuthenticationApiRequest } from '../../models';
import { validateAuthenticationRequest } from './validations';
import { BadRequest } from '../../../../errors';

interface HandlerDependencies {
  authenticationService: AuthenticationService;
}

const makeAuthenticationV1Handlers = (
  dependencies: HandlerDependencies
): AuthenticationHandler => ({
  authenticate: async (ctx: Context) => {
    const authRequest = urlQueryToApiQuery<AuthenticationApiRequest>(
      ctx.request.query
    );

    const { error: validationError, value: validRequest } =
      validateAuthenticationRequest(authRequest);

    if (validationError)
      throw new BadRequest(validationError.details[0]?.message);

    const response = await dependencies.authenticationService.authenticate(ctx);
  },
  logged: async (ctx: Context) => {
    const { code } = ctx.query;

    const response = await dependencies.authenticationService.getToken(
      code as string,
      ctx
    );
  }
});

export { makeAuthenticationV1Handlers };
