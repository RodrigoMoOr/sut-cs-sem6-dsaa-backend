import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../entities/book.entity';
import { GetFilteredBooksDTO } from '../../dto/get-filtered-books.dto';

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
    @Query('items') items = 10,
    @Query() filtersDTO: GetFilteredBooksDTO,
  ): Promise<Book[]> {
    if (Object.keys(filtersDTO).length) {
      return this.bookService.findByFilter(filtersDTO);
    }
    return this.bookService.findAll();
  }

  @Put(':id')
  updateBook(@Body() book): Promise<Book> {
    return this.bookService.updateOne(book);
  }
}
