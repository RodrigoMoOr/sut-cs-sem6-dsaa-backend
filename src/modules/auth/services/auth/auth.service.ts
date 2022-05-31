import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../user/services/user/user.service';
import { CreateUserDTO } from '../../../user/dto/create-user.dto';
import { UserDTO } from '../../../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  // async validateUser(credentials: Credentials): Promise<User | undefined> {
  //   return this.userService.findByUsername(credentials.username);
  // }

  // async signIn(user: User): Promise<SignInResponse> {
  //   const payload = { username: user.username, sub: user.id };
  //   return { accessToken: this.jwtService.sign(payload) };
  // }

  async signUp(user: CreateUserDTO): Promise<UserDTO> {
    return await this.userService.create(user);
  }

  // googleSignIn(req): GoogleSignInResponse | undefined {
  //   if (!req.user) {
  //     return null;
  //   }
  //
  //   return {
  //     message: 'User information from google',
  //     user: req.user,
  //   };
  // }
}
