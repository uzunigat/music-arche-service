import { UserHandler } from '../../types'
import { Context } from 'koa'
import { UserService } from '../../../../../domain/services/user-service'
import { CreateUserApiRequest } from '../../models'
import { createUserRequestValidator } from './validations'
import { BadRequest } from '../../../../errors'
interface HandlerDependencies {
  userService: UserService
}

const makeUserV1Handlers = (dependencies: HandlerDependencies): UserHandler => ({
  create: async (ctx: Context) => {
    const createRequestBody = ctx.request.body as CreateUserApiRequest
    const { error: validationError, value: validRequest } = createUserRequestValidator(createRequestBody)
    if (validationError) throw new BadRequest(validationError.details[0]?.message)

    const result = await dependencies.userService.create(validRequest)
    ctx.body = { data: result }
  }
})

export { makeUserV1Handlers }
