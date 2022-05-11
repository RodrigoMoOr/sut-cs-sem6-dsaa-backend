import { AuthorDto } from './author.dto';

export class BookDto {
  id: number;
  isbn10?: string;
  isbn13?: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImageUrl: string;
  price: number;
  publisher: string;
  releaseDate: Date;
  rating: number;
  author: AuthorDto;
}
