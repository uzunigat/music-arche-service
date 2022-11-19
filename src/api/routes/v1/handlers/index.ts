import { ApiHandlers, V1RouterDependencies } from '../types'
import { makeAuthenticationV1Handlers } from './authentication'
import { makeUserV1Handlers } from './user'
import { makePlayerV1Handlers } from './player'
import { makeTrackerV1Handlers } from './tracker'

const makeHandlers = (dependencies: V1RouterDependencies): ApiHandlers => ({
  ...makeAuthenticationV1Handlers(dependencies),
  ...makeUserV1Handlers(dependencies),
  ...makePlayerV1Handlers(dependencies),
  ...makeTrackerV1Handlers(dependencies)
})

export { makeHandlers }
