import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { Credentials } from '../interfaces/signin.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(credentials: Credentials): Promise<any> {
    const user = await this.authService.validateUser(credentials);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}