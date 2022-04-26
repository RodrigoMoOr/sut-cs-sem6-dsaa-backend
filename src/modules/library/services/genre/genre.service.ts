import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from '../../entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
  constructor(@InjectRepository(Genre) private readonly genreRepository: Repository<Genre>) {}

  findOne(id: number): Promise<Genre> {
    return this.genreRepository.findOne(id);
  }

  findAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }
}
