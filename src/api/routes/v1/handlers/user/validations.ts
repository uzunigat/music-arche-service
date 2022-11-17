import Joi from 'joi'
import { CreateUserApiRequest } from '../../models'

const createUserRequestValidator = (request: CreateUserApiRequest) =>
  Joi.object<CreateUserApiRequest>({
    user: Joi.object({
      id: Joi.string().required(),
      displayName: Joi.string().required(),
      images: Joi.array().items(
        Joi.object({
          height: Joi.number().allow(null),
          url: Joi.string().required(),
          width: Joi.number().allow(null)
        })
      ),
      followers: Joi.object({
        href: Joi.any().allow(null),
        total: Joi.number().required()
      }),
      href: Joi.string().required(),
      type: Joi.string().required(),
      externalUrls: Joi.object({
        spotify: Joi.string().required()
      }).required(),
      uri: Joi.string().required()
    }).required(),
    tokenId: Joi.string().required()
  }).validate(request)

export { createUserRequestValidator }
