import configVars from './config-vars'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function loadConfig() {
  configVars.validate({ allowed: 'warn' })
  return configVars
}

export * from './interfaces'

export default configVars
