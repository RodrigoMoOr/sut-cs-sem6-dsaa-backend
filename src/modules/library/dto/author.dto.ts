import { BookDto } from './book.dto';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  bio: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  books: BookDto[];

  @ApiProperty()
  genres: any;
}
