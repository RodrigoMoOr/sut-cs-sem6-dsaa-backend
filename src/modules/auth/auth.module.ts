import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './strategies/jwt.strategy';
import { GoogleAuthStrategy } from './strategies/google-auth.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '60s' } })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JWTStrategy, GoogleAuthStrategy],
  exports: [JWTStrategy],
})
export class AuthModule {}
