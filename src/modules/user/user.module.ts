import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';

@Module({
  controllers: [UserController]
})
export class UserModule {}
