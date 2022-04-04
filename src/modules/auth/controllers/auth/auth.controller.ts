import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { LoginDto } from '../../dto/login.dto';

@Controller('auth')
export class AuthController {
  @Post()
  createUser(@Body() user: CreateUserDto): void {}

  @Post()
  login(@Body() credentials: LoginDto): void {}
}
