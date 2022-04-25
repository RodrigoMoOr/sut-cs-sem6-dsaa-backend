import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interface';
import { users } from '../../mocks/users';

@Injectable()
export class UserService {
  async findOne(email: string): Promise<User> {
    return users.find(user => user.email === email);
  }
}
