import { CartDto } from '../dto/cart.dto';
import { Cart } from '../entities/cart.entity';

export const toCartDto = (data: Cart): CartDto => {
  return {
    id: data.id,
    // books: data.books,
    total: data.total,
    totalItems: data.totalItems,
    updatedAt: data.updatedAt,
  };
};
