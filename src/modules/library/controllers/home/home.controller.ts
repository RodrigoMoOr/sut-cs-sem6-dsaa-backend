import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from '../../services/author/author.service';
import { BookService } from '../../services/book/book.service';
import { GenreService } from '../../services/genre/genre.service';
import { Book } from '../../entities/book.entity';
import { Author } from '../../entities/author.entity';
import { Genre } from '../../entities/genre.entity';

@ApiTags('Home')
@Controller('home')
export class HomeController {
  constructor(
    private readonly authorService: AuthorService,
    private readonly bookService: BookService,
    private readonly genreService: GenreService,
  ) {}

  @Get('books')
  getHomePageBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get('authors')
  getHomePageAuthors(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @Get('genres')
  getHomePageGenres(): Promise<Genre[]> {
    return this.genreService.findAll();
  }
}
