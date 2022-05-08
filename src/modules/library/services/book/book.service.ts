import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../../entities/book.entity';
import { Repository } from 'typeorm';
import { GetFilteredBooksDTO } from '../../dto/get-filtered-books.dto';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne(id);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findByFilter(filters: GetFilteredBooksDTO): Promise<Book[]> {
    const { title } = filters;

    let books = await this.findAll();

    if (title) {
      books = books.filter(book => book.title === title);
    }

    return books;
  }
}
