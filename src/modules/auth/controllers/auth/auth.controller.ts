import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { LoginDto } from '../../dto/login.dto';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  createUser(@Body() user: CreateUserDto): void {
    this.authService.createUser({
      name: user.name,
      surname: user.surname,
      email: user.email,
    });
  }

  @Post()
  login(@Body() credentials: LoginDto): void {}
}
