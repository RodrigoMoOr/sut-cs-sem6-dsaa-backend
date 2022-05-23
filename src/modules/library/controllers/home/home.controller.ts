import {Controller} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AuthorService} from "../../services/author/author.service";
import {BookService} from "../../services/book/book.service";
import {GenreService} from "../../services/genre/genre.service";

@ApiTags('Home')
@Controller('home')
export class HomeController {
  constructor(private readonly authorService: AuthorService, private readonly bookService: BookService, private readonly genreService: GenreService) {
  }
}
