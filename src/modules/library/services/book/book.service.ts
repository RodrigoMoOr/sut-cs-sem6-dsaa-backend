import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../../entities/book.entity';
import { Repository } from 'typeorm';
import { GetFilteredBooksDTO } from '../../dto/get-filtered-books.dto';
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

  async sortBooksByTitle(filters: GetFilteredBooksDTO): Promise<Book[]> {
    const { title } = filters;

    let books = await this.findAll();

    if (title) {
      books = books.filter(book => book.title === title);
    }

    return books.sort((a, b) => (a.title > b.title ? 1 : -1));
  }

  async sortBooksByAuthor(filters: GetFilteredBooksDTO): Promise<Book[]> {
    const { author } = filters;

    let books = await this.findAll();

    if (author) {
      books = books.filter(book => book.author === author);
    }

    return books.sort((a, b) => (a.author > b.author ? 1 : -1));
  }

  async sortBooksByPrice(filters: GetFilteredBooksDTO): Promise<Book[]> {
    const { price } = filters;

    let books = await this.findAll();

    if (price) {
      books = books.filter(book => book.price === price);
    }

    return books.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  async sortBooksByRating(filters: GetFilteredBooksDTO): Promise<Book[]> {
    const { rating } = filters;

    let books = await this.findAll();

    if (rating) {
      books = books.filter(book => book.rating === rating);
    }

    return books.sort((a, b) => (a.rating > b.rating ? 1 : -1));
  }

  async sortBooksByPublisher(filters: GetFilteredBooksDTO): Promise<Book[]> {
    const { publisher } = filters;

    let books = await this.findAll();

    if (publisher) {
      books = books.filter(book => book.publisher === publisher);
    }

    return books.sort((a, b) => (a.publisher > b.publisher ? 1 : -1));
  }

  async updateOne(book): Promise<Book> {
    const foundBook = await this.findOne(book.id);

    if (!foundBook) throw new HttpException('Book not found ', HttpStatus.NOT_FOUND);
    await this.bookRepository.update(book.id, book);

    return this.findOne(book.id);
  }
}
