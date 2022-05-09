import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { AuthService } from '../../services/auth/auth.service';
import { GoogleSignInResponse, SignInResponse } from '../../interfaces/sign-in.interface';
import { ApiTags } from '@nestjs/swagger';
import { GoogleAuthGuard } from '../../guards/google-auth.guard';
import { SignUp, SignUpResponse } from '../../interfaces/sign-up.interface';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  signIn(@Request() req): Promise<SignInResponse> {
    return this.authService.signIn(req.user);
  }

  @Post('sign-up')
  signUp(@Body() user: SignUp): Promise<SignUpResponse> {
    return this.authService.signUp(user);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req): GoogleSignInResponse | undefined {
    return this.authService.googleSignIn(req);
  }
}
