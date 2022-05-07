import { Injectable } from '@nestjs/common';
import { CreateUser } from '../../interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(user: CreateUser): Promise<User> {
    return this.userRepository.create(user);
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({ where: { username: username } });
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  // TODO: implement this method
  // async updateUser(user: UpdateUser): Promise<User> {
  //   return await this.userRepository.update();
  // }

  // TODO: implement this method
  // async deleteUser(id: number): Promise<any> {
  //   return await this.userRepository.delete();
  // }
}
