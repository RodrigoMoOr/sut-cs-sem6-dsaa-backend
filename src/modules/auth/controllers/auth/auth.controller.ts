import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserInfo } from '../../../user/interfaces/user.interface';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() req): Promise<UserInfo> {
    return req.user;
  }

  @Post('signUp')
  async signUp() {}
}
