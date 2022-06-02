import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthorService } from '../../services/author/author.service';
import { Author } from '../../entities/author.entity';
import { Observable } from 'rxjs';
import { Pagination } from 'nestjs-typeorm-paginate';
import { AuthorDto } from '../../dto/author.dto';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorService) {}

  @Get(':id')
  getAuthorById(@Param('id') id: number): Promise<Author> {
    return this.authorService.findOne(id);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, example: 2, description: 'Requested page' })
  @ApiQuery({ name: 'limit', required: false, example: 10, description: 'Items per page' })
  @ApiOkResponse({ description: 'Fetched books from DB', type: [AuthorDto] })
  getAllAuthors(@Query('page') page = 1, @Query('limit') limit = 10): Observable<Pagination<Author>> {
    return this.authorService.findAllPaginated({ page, limit, route: 'localhost:3000/authors' });
  }
}
