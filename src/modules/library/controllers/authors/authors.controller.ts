import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthorService } from '../../services/author/author.service';
import { AuthorDto } from '../../dto/author.dto';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorService) {}

  @Get(':id')
  getAuthorById(@Param('id') id: number): Promise<AuthorDto> {
    return this.authorService.findOne(id);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, example: 2, description: 'Requested page' })
  @ApiQuery({ name: 'limit', required: false, example: 10, description: 'Items per page' })
  @ApiOkResponse({ description: 'Fetched books from DB', type: [AuthorDto] })
  getAllAuthors(@Query('page') page = 1, @Query('limit') limit = 10): Promise<AuthorDto[]> {
    return this.authorService.findAllPaginated2(page, limit);
  }
}
