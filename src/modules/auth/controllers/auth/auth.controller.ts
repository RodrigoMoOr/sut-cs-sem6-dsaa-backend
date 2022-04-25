import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User, UserInfo } from '../../../user/interfaces/user.interface';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { AuthService } from '../../services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { SignInReponse } from '../../interfaces/signin.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private jwtService: JwtService) {}

  @Post('signIn')
  @UseGuards(LocalAuthGuard)
  async signIn(user: User): Promise<SignInReponse> {
    const payload = { email: user.email, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }

  @Post('signUp')
  async signUp() {}
}
