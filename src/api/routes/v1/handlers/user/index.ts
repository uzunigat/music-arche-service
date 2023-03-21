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

    const user = await dependencies.userService.getBySpotifyId(validRequest.user.id)

    if (user) {
      ctx.status = 200
      ctx.body = { data: user }
      return
    }

    const result = await dependencies.userService.create(validRequest)
    ctx.body = { data: result }
  },

  getById: async (ctx: Context) => {
    const { userId } = ctx.params
    const user = await dependencies.userService.getById(userId)

    ctx.body = { data: user }
  },

  getBySpotifyId: async (ctx: Context) => {
    const { spotifyId } = ctx.params
    const user = await dependencies.userService.getBySpotifyId(spotifyId)

    ctx.body = { data: user }
  }
})

export { makeUserV1Handlers }
