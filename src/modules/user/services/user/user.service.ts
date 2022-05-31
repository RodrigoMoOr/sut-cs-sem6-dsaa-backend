import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UserDTO } from '../../dto/user.dto';
import { toUserDTO } from '../../../shared/helpers/mapper';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { SignInDTO } from '../../../auth/dto/sign-in.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(user: CreateUserDTO): Promise<UserDTO> {
    const existingUser = await this.userRepository.findOne({ where: { username: user.username } });
    if (existingUser) throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

    const createdUser = await this.userRepository.create(user);
    await this.userRepository.save(createdUser);

    return toUserDTO(createdUser);
  }

  async findByUsername(signInDTO: SignInDTO): Promise<UserDTO> {
    const existingUser = await this.userRepository.findOne({ where: { username: signInDTO.username } });
    if (!existingUser) throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);

    Logger.log('existing pass', existingUser.password);
    if (existingUser.password != signInDTO.password)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    return toUserDTO(existingUser);
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async updateUser(user: UpdateUserDto): Promise<User> {
    const existingUser = await this.findById(user.id);
    await this.userRepository.update(existingUser.id, user);
    return await this.findById(existingUser.id);
  }

  async deleteUser(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
