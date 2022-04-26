import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../entities/book.entity';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}
