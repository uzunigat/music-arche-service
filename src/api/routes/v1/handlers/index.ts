import { ApiHandlers } from '../types';
import { makeAuthenticationV1Handlers } from './authentication';

const makeHandlers = (): ApiHandlers => ({
  ...makeAuthenticationV1Handlers()
});

export { makeHandlers };
