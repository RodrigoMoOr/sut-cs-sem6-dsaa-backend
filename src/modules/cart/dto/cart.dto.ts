import { ApiProperty } from '@nestjs/swagger';

export class CartDto {
  @ApiProperty()
  id: number;

  // @ApiProperty()
  // books: BookDto[];

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  updatedAt: Date;
}
