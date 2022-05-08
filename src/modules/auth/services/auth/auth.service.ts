import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../user/services/user/user.service';
import { Credentials, GoogleSignInResponse, SignInResponse } from '../../interfaces/sign-in.interface';
import { SignUp, SignUpResponse } from '../../interfaces/sign-up.interface';
import { User } from '../../../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(credentials: Credentials): Promise<User | undefined> {
    return this.userService.findByUsername(credentials.username);
  }

  async signIn(user: User): Promise<SignInResponse> {
    const payload = { username: user.username, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async signUp(user: SignUp): Promise<SignUpResponse> {
    const createdUser = await this.userService.create(user);
    return { id: createdUser.id, username: createdUser.username };
  }

  googleSignIn(req): GoogleSignInResponse | undefined {
    if (!req.user) {
      return null;
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
