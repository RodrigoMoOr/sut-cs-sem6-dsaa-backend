import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../../entities/author.entity';
import { Like, Repository } from 'typeorm';
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

  // findAllPaginated(options: IPaginationOptions): Observable<Pagination<Author>> {
  //   return from(paginate<Author>(this.authorRepository, options)).pipe(map((authors: Pagination<Author>) => authors));
  // }

  async findAllPaginated2(
    page = 1,
    limit = 10,
    sortBy?: string,
    sortOrder?: string,
    filterBy?: string,
    filterQuery?: string,
  ): Promise<AuthorDto[]> {
    if (sortBy && sortOrder && filterBy && filterQuery) {
      const authors = await this.authorRepository.findAndCount({
        take: limit,
        skip: (page - 1) * limit,
        order: { [sortBy]: sortOrder },
        where: {
          [filterBy]: Like(filterQuery),
        },
      });

      return authors[0].map(author => toAuthorDto(author));
    }

    if (sortBy && sortOrder) {
      const authors = await this.authorRepository.findAndCount({
        take: limit,
        skip: (page - 1) * limit,
        order: { [sortBy]: sortOrder },
      });

      return authors[0].map(author => toAuthorDto(author));
    }

    if (filterBy && filterQuery) {
      const authors = await this.authorRepository.findAndCount({
        take: limit,
        skip: (page - 1) * limit,
        where: {
          [filterBy]: Like(filterQuery),
        },
      });

      return authors[0].map(author => toAuthorDto(author));
    }

    const authors = await this.authorRepository.find({
      take: limit,
      skip: (page - 1) * limit,
    });
    Logger.log(typeof authors);
    return authors.map(author => toAuthorDto(author));
  }
}
