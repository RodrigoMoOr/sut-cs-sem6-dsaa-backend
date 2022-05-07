import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../../services/user/user.service';
import { CreatedUser } from '../../interfaces/user.interface';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('info/:id')
  async getUserInfo(@Param('id') id: number): Promise<CreatedUser> {
    return this.userService.findById(id);
  }
}
