import { ApiHandlers, V1RouterDependencies } from '../types'
import { makeAuthenticationV1Handlers } from './authentication'

const makeHandlers = (dependencies: V1RouterDependencies): ApiHandlers => ({
  ...makeAuthenticationV1Handlers(dependencies)
})

export { makeHandlers }
