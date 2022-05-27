import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from '../../entities/genre.entity';
import { Repository } from 'typeorm';
import { from, map, Observable } from 'rxjs';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class GenreService {
  constructor(@InjectRepository(Genre) private readonly genreRepository: Repository<Genre>) {}

  findOne(id: number): Promise<Genre | null> {
    return this.genreRepository.findOneOrFail(id);
  }

  findAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  findAllPaginated(options: IPaginationOptions): Observable<Pagination<Genre>> {
    return from(paginate<Genre>(this.genreRepository, options)).pipe(map((genres: Pagination<Genre>) => genres));
  }
}
