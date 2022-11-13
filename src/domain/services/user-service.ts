import { CreateUserApiRequest } from '../../api/routes/v1/models'
import { UserRepository } from '../spi-ports'

interface UserServiceRepositories {
  user: UserRepository
}
class UserService {
  constructor(private repositories: UserServiceRepositories) {}

  async create(request: CreateUserApiRequest) {
    return await this.repositories.user.create(request)
  }
}

export { UserService }
