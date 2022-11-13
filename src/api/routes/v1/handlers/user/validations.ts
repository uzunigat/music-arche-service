import Joi from 'joi'
import { CreateUserApiRequest } from '../../models'

const createUserRequestValidator = (request: CreateUserApiRequest) =>
  Joi.object<CreateUserApiRequest>({
    displayName: String,
    href: String,
    spotifyId: String,
    tokenId: String
  }).validate(request)

export { createUserRequestValidator }
