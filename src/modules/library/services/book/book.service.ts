import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../../entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne(id);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }
}
