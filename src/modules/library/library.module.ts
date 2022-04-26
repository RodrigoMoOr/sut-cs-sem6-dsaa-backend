import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { AuthorsController } from './controllers/authors/authors.controller';
import { GenreController } from './controllers/genre/genre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BookService } from './services/book/book.service';
import { GenreService } from './services/genre/genre.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController, AuthorsController, GenreController],
  providers: [BookService, GenreService],
})
export class LibraryModule {}
