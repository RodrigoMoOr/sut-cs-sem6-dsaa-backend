import { Injectable } from '@nestjs/common';
import { UserService } from '../../../user/services/user/user.service';
import { Credentials, SignInResponse } from '../../interfaces/signin.interface';
import { UserInfo } from '../../../user/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(credentials: Credentials): Promise<UserInfo | undefined> {
    const user = await this.userService.findOne(credentials.email);

    if (user && user.password === credentials.password) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async signIn(user: UserInfo): Promise<SignInResponse> {
    const payload = { email: user.email, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
