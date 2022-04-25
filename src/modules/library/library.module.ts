import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { AuthorsController } from './controllers/authors/authors.controller';
import { GenreController } from './controllers/genre/genre.controller';

@Module({
  controllers: [BooksController, AuthorsController, GenreController]
})
export class LibraryModule {}
