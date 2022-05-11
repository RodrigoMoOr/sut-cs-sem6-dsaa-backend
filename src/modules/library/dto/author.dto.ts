import { BookDto } from './book.dto';

export class AuthorDto {
  id: number;
  name: string;
  surname: string;
  bio: string;
  imageUrl: string;
  books: BookDto[];
  genres: any;
}
