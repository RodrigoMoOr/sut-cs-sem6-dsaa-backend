import { UserDTO } from '../../user/dto/user.dto';
import { User } from '../../user/entities/user.entity';

export const toUserDTO = (data: User): UserDTO => {
  return { id: data.id, username: data.username, email: data.email };
};
