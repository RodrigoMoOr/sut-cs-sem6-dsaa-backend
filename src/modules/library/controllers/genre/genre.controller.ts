import { Controller, Get, Param, Query } from '@nestjs/common';
import { GenreService } from '../../services/genre/genre.service';
import { Genre } from '../../entities/genre.entity';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { Pagination } from 'nestjs-typeorm-paginate';
import { GenreDto } from '../../dto/genre.dto';

@ApiTags('Genres')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':id')
  getGenreById(@Param('id') id: number): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, example: 2, description: 'requested page' })
  @ApiQuery({ name: 'limit', required: false, example: 10, description: 'items per page' })
  @ApiOkResponse({ description: 'Fetched books from DB', type: [GenreDto] })
  getAllGenres(@Query('page') page = 1, @Query('limit') limit = 10): Observable<Pagination<Genre>> {
    return this.genreService.findAllPaginated({ page, limit, route: 'localhost:3000/genres' });
  }
}
