import Joi from 'joi'
import { CreateUserApiRequest } from '../../models'

const createUserRequestValidator = (request: CreateUserApiRequest) =>
  Joi.object<CreateUserApiRequest>({
    href: String,
    spotifyId: String,
    tokenId: String
  }).validate(request)

export { createUserRequestValidator }
