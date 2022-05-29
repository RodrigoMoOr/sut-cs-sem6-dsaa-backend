import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from '../../services/author/author.service';
import { Author } from '../../entities/author.entity';
import { Observable } from 'rxjs';
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorService) {}

  @Get(':id')
  getAuthorById(@Param('id') id: number): Promise<Author> {
    return this.authorService.findOne(id);
  }

  @Get()
  getAllAuthors(@Query('page') page = 1, @Query('limit') limit = 10): Observable<Pagination<Author>> {
    return this.authorService.findAllPaginated({ page, limit, route: 'localhost:3000/authors' });
  }
}
