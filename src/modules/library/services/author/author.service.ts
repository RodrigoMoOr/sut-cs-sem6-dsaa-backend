import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../../entities/author.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { from, map, Observable } from 'rxjs';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author>) {}

  findOne(id: number): Promise<Author | null> {
    return this.authorRepository.findOneOrFail(id);
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findAllPaginated(options: IPaginationOptions): Observable<Pagination<Author>> {
    return from(paginate<Author>(this.authorRepository, options)).pipe(map((authors: Pagination<Author>) => authors));
  }
}
