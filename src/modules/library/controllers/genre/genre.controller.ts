import { Controller, Get, Param } from '@nestjs/common';
import { GenreService } from '../../services/genre/genre.service';
import { Genre } from '../../entities/genre.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Genres')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':id')
  getGenreById(@Param('id') id: number): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Get()
  getAllGenres(): Promise<Genre[]> {
    return this.genreService.findAll();
  }
}
