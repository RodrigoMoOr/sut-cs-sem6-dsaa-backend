import { Injectable } from '@nestjs/common';
import { User, UserInfo } from '../../interfaces/user.interface';
import { users } from '../../mocks/users';

@Injectable()
export class UserService {
  async findOne(username: string): Promise<User> {
    return users.find(user => user.username === username);
  }

  async findById(id: number): Promise<UserInfo> {
    const { password, ...rest } = users.find(user => user.id === id);
    return rest;
  }
}
