import { makeApiRouterV1, makeApp } from './api';
import { loadConfig } from './config';

const runApplication = async () => {
  // Get config
  const config = await loadConfig();

  const app = await makeApp();

  const routerApiV1 = makeApiRouterV1();

  app.use(routerApiV1.routes());

  const server = await app.listen(config.get('app').port, () =>
    console.log(`Koa Started on port ${config.get('app').port}`)
  );
};

export { runApplication };
