import { IsNotEmpty } from 'class-validator';

export class SignInDTO {
  @IsNotEmpty() readonly username: string;
  @IsNotEmpty() readonly password: string;
}
