import { Injectable } from '@nestjs/common';
import { UserService } from '../../../user/services/user/user.service';
import { Credentials } from '../../interfaces/auth.interface';
import { User } from '../../../user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(credentials: Credentials): Promise<Partial<User> | undefined> {
    const user = await this.userService.findOne(credentials.email);

    if (user && user.password == credentials.password) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }
}
