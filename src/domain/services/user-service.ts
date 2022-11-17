import { CreateUserApiRequest } from '../../api/routes/v1/models'
import { mapUserFromSpotifyToDomain } from '../../spi/repositories/util/map-user'
import { UserRepository } from '../spi-ports'

interface UserServiceRepositories {
  user: UserRepository
}
class UserService {
  constructor(private repositories: UserServiceRepositories) {}

  async create(request: CreateUserApiRequest) {
    const { user: spotifyUser, tokenId } = request

    console.log('Spotfiy user', spotifyUser)
    const user = mapUserFromSpotifyToDomain(spotifyUser, tokenId)

    console.log('User', user)
    return await this.repositories.user.create(user)
  }

  async getUserByTokenId(token: string) {
    return await this.repositories.user.getUserByTokenId(token)
  }
}

export { UserService }
