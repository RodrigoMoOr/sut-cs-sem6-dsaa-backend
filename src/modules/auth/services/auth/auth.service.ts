import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interface';

@Injectable()
export class AuthService {
  createUser(user: User): void {}
}
