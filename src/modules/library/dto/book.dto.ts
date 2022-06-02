import { AuthorDto } from './author.dto';
import { ApiProperty } from '@nestjs/swagger';
import { GenreDTO } from './genre.dto';

export class BookDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  isbn10?: string;

  @ApiProperty()
  isbn13?: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle?: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  coverImageUrl: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  publisher: string;

  @ApiProperty()
  releaseDate: Date;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  author: AuthorDto;

  @ApiProperty()
  genre: GenreDTO;
}
