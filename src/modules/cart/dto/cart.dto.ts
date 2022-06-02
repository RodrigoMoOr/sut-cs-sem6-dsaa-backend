import { ApiProperty } from '@nestjs/swagger';
import { BookDto } from '../../library/dto/book.dto';

export class CartDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  books: BookDto[];

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  updatedAt: Date;
}
