import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { AuthorsController } from './controllers/authors/authors.controller';

@Module({
  controllers: [BooksController, AuthorsController]
})
export class LibraryModule {}
