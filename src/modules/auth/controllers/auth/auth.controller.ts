import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { AuthService } from '../../services/auth/auth.service';
import { GoogleSignInResponse, SignInResponse } from '../../interfaces/sign-in.interface';
import { ApiTags } from '@nestjs/swagger';
import { GoogleAuthGuard } from '../../guards/google-auth.guard';
import { SignUpResponse } from '../../interfaces/sign-up.interface';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Request() req): Promise<SignInResponse> {
    return this.authService.signIn(req.user);
  }

  @Post('sign-up')
  async signUp(): Promise<SignUpResponse> {
    this.authService;
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req): GoogleSignInResponse | undefined {
    return this.authService.googleSignIn(req);
  }
}
