import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../../entities/author.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { from, map, Observable } from 'rxjs';
import { AuthorDto } from '../../dto/author.dto';
import { toAuthorDto } from '../../helpers/mapper';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author>) {}

  async findOne(id: number): Promise<AuthorDto | null> {
    return toAuthorDto(await this.authorRepository.findOneOrFail(id));
  }

  async findAll(): Promise<AuthorDto[]> {
    const authors = await this.authorRepository.find();
    return authors.map(author => toAuthorDto(author));
  }

  findAllPaginated(options: IPaginationOptions): Observable<Pagination<Author>> {
    return from(paginate<Author>(this.authorRepository, options)).pipe(map((authors: Pagination<Author>) => authors));
  }
}
