import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from '../../services/author/author.service';
import { Author } from '../../entities/author.entity';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorService) {}

  @Get(':id')
  getAuthorById(@Param('id') id: number): Promise<Author> {
    return this.authorService.findOne(id);
  }

  @Get()
  getAllAuthors(): Promise<Author[]> {
    return this.authorService.findAll();
  }
}
