import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../entities/book.entity';
import { GetFilteredBooksDTO } from '../../dto/get-filtered-books.dto';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Get()
  async getBooks(@Query() filtersDTO: GetFilteredBooksDTO): Promise<Book[]> {
    return this.bookService.findAll();
  }
}
