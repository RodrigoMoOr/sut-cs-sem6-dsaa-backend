import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../../entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author>) {}

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne(id);
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }
}
