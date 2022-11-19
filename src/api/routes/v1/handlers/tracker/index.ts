import { TrackerHandler } from '../../types'
import { Context } from 'koa'
import { SpotifyService } from '../../../../../domain/services'
interface HandlerDependencies {
  spotifyService: SpotifyService
}

const makeTrackerV1Handlers = (dependencies: HandlerDependencies): TrackerHandler => ({
  searchTracks: async (ctx: Context) => {
    const { searchQuery, tokenId } = ctx.params
    const tracks = await dependencies.spotifyService.searchTracks(tokenId, searchQuery)
    ctx.body = tracks
  }
})

export { makeTrackerV1Handlers }
