import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../entities/book.entity';
import { GetFilteredBooksDTO } from '../../dto/get-filtered-books.dto';
import { Observable } from 'rxjs';
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get(':id')
  getBookById(@Param('id') id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Get()
  getBooks(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query() filtersDTO: GetFilteredBooksDTO,
  ): Observable<Pagination<Book>> | Promise<Book[]> {
    if (Object.keys(filtersDTO).length) {
      return this.bookService.findByFilter(filtersDTO);
    }
    return this.bookService.findAllPaginate({ page, limit, route: 'localhost:3000/authors' });
  }

  @Get('/sort')
  sortBooksByTitle(@Query() filtersDTO: GetFilteredBooksDTO): Promise<Book[]> {
    return this.bookService.sortBooksByTitle(filtersDTO);
  }

  @Get('/sort')
  sortBooksByAuthor(@Query() filtersDTO: GetFilteredBooksDTO): Promise<Book[]> {
    return this.bookService.sortBooksByAuthor(filtersDTO);
  }

  @Get('/sort')
  sortBooksByPrice(@Query() filtersDTO: GetFilteredBooksDTO): Promise<Book[]> {
    return this.bookService.sortBooksByPrice(filtersDTO);
  }

  @Get('/sort')
  sortBooksByRating(@Query() filtersDTO: GetFilteredBooksDTO): Promise<Book[]> {
    return this.bookService.sortBooksByRating(filtersDTO);
  }

  @Get('/sort')
  sortBooksByPublisher(@Query() filtersDTO: GetFilteredBooksDTO): Promise<Book[]> {
    return this.bookService.sortBooksByPublisher(filtersDTO);
  }
  @Put(':id')
  updateBook(@Body() book): Promise<Book> {
    return this.bookService.updateOne(book);
  }
}
