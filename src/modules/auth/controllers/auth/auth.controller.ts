import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserInfo } from '../../../user/interfaces/user.interface';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { AuthService } from '../../services/auth/auth.service';
import { SignInResponse } from '../../interfaces/signin.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  @UseGuards(LocalAuthGuard)
  async signIn(user: UserInfo): Promise<SignInResponse> {
    return this.authService.signIn(user);
  }

  // @Post('signUp')
  // async signUp() {}
}
