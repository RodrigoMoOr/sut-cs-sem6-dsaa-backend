import { Controller, Get, Param, Query } from '@nestjs/common';
import { GenreService } from '../../services/genre/genre.service';
import { Genre } from '../../entities/genre.entity';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags('Genres')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':id')
  getGenreById(@Param('id') id: number): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Get()
  getAllGenres(@Query('page') page = 1, @Query('limit') limit = 10): Observable<Pagination<Genre>> {
    return this.genreService.findAllPaginated({ page, limit, route: 'localhost:3000/genres' });
  }
}
