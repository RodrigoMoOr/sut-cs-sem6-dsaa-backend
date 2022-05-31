import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsNotEmpty() id: number;
  @IsNotEmpty() username: string;
  @IsNotEmpty() @IsEmail() email: string;
}
