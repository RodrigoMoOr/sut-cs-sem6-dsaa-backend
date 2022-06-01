import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../../entities/book.entity';
import { Repository } from 'typeorm';
import { GetFilteredBooksDTO } from '../../dto/get-filtered-books.dto';
import { GetSortedBooksDTO } from '../../dto/get-sorted-books.dto';
import { from, map, Observable } from 'rxjs';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

  create(book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOneOrFail(id);
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findAllPaginate(options: IPaginationOptions): Observable<Pagination<Book>> {
    return from(paginate<Book>(this.bookRepository, options)).pipe(map((books: Pagination<Book>) => books));
  }

  async findByFilter(filters: GetFilteredBooksDTO): Promise<Book[]> {
    const { title } = filters;

    let books = await this.findAll();

    if (title) {
      books = books.filter(book => book.title === title);
    }

    return books;
  }

  async sortBooks(sorting: GetSortedBooksDTO): Promise<Book[]> {
    const { sortBy, sortOrder } = sorting;

    if (sortBy === 'title' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: {
          title: 'DESC',
        },
      });
    }
    if (sortBy === 'title' && sortOrder === 'asc') {
      {
        return this.bookRepository.find({
          order: { title: 'ASC' },
        });
      }
    }
    if (sortBy === 'price' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: {
          price: 'DESC',
        },
      });
    }
    if (sortBy === 'price' && sortOrder === 'asc') {
      return this.bookRepository.find({
        order: { price: 'ASC' },
      });
    }
    if (sortBy === 'rating' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: {
          rating: 'DESC',
        },
      });
    }
    if (sortBy === 'rating' && sortOrder === 'asc') {
      return this.bookRepository.find({
        order: { rating: 'ASC' },
      });
    }
    if (sortBy === 'author' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: { author: 'DESC' },
      });
    }
    if (sortBy === 'author' && sortOrder === 'asc') {
      return this.bookRepository.find({
        order: { author: 'ASC' },
      });
    }
    if (sortBy === 'publisher' && sortOrder === 'desc') {
      return this.bookRepository.find({
        order: { publisher: 'DESC' },
      });
    }
    if (sortBy === 'publisher' && sortOrder === 'asc') {
      return this.bookRepository.find({
        order: { publisher: 'ASC' },
      });
    }
  }
  async updateOne(book): Promise<Book> {
    const foundBook = await this.findOne(book.id);

    if (!foundBook) throw new HttpException('Book not found ', HttpStatus.NOT_FOUND);
    await this.bookRepository.update(book.id, book);

    return this.findOne(book.id);
  }
}
