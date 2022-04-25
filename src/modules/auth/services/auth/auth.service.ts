import { Injectable } from '@nestjs/common';
import { UserService } from '../../../user/services/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  // async validateUser();
}
