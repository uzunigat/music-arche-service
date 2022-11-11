import Router from '@koa/router';
import { makeHandlers } from './handlers';
import { version } from './version';

const baseApiRoute = `/api/${version}`;
const baseAuthenticationRoute = `${baseApiRoute}/authenticate`;

const makeApiRouterV1 = (): Router => {
  console.log('Creating Api Router');
  const router = new Router();
  const handlers = makeHandlers();

  router.get(`${baseAuthenticationRoute}`, handlers.authenticate);

  return router;
};

export { makeApiRouterV1 };
