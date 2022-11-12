import Joi from 'joi'
import { AuthenticationApiRequest } from '../../models'

const validateAuthenticationRequest = (request: AuthenticationApiRequest) =>
  Joi.object<AuthenticationApiRequest>({
    redirectUri: String
  }).validate(request)

export { validateAuthenticationRequest }
