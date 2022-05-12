import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../../entities/book.entity';
import { Repository } from 'typeorm';
import { GetFilteredBooksDTO } from '../../dto/get-filtered-books.dto';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

  create(book): Promise<Book> {
    return this.bookRepository.save(book);
  }

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

  async updateOne(book): Promise<Book> {
    const foundBook = await this.findOne(book.id);

    if (!foundBook) throw new HttpException('Book not found ', HttpStatus.NOT_FOUND);
    await this.bookRepository.update(book.id, book);

    return this.findOne(book.id);
  }
}
