import { PlayerHandler } from '../../types'
import { Context } from 'koa'
import { SpotifyService } from '../../../../../domain/services'
interface HandlerDependencies {
  spotifyService: SpotifyService
}

const makePlayerV1Handlers = (dependencies: HandlerDependencies): PlayerHandler => ({
  play: async (ctx: Context) => {
    const { tokenId } = ctx.params
    await dependencies.spotifyService.play(tokenId)
  },
  pause: async (ctx: Context) => {
    const { tokenId } = ctx.params
    await dependencies.spotifyService.pause(tokenId)
  }
})

export { makePlayerV1Handlers }
