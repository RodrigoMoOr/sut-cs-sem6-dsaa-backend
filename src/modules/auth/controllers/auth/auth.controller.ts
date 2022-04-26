import { Controller, Post, UseGuards, Request, Logger } from '@nestjs/common';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { AuthService } from '../../services/auth/auth.service';
import { SignInResponse } from '../../interfaces/signin.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Request() req): Promise<SignInResponse> {
    return this.authService.signIn(req.user);
  }
}
