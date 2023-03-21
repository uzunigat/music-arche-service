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

    const user = mapUserFromSpotifyToDomain(spotifyUser, tokenId)

    return await this.repositories.user.create(user)
  }

  async getBySpotifyId(spotifyId: string) {
    return await this.repositories.user.getBySpotifyId(spotifyId)
  }

  async getById(id: string) {
    return await this.repositories.user.getById(id)
  }

  async getByTokenId(tokenId: string) {
    return await this.repositories.user.getByTokenId(tokenId)
  }
}

export { UserService }
