import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../../services/user/user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // TODO: re implement these methods
  // @Get()
  // getUser(): Promise<User> {
  //   return this.userService.findById(id);
  // }
  //
  // @Put()
  // updateUser(user: UpdateUserDto): Promise<User> {
  //   return this.userService.updateUser(user);
  // }
  //
  // @Delete()
  // deleteUser(): Promise<any> {
  //   return this.userService.deleteUser(id);
  // }
}
