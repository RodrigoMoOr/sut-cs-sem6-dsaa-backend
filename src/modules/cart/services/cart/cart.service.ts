import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '../../entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(@InjectRepository(Cart) private readonly cartRepository: Repository<Cart>) {}

  async create(cart): Promise<Cart> {
    const createdCart = this.cartRepository.create();

    if (!createdCart) throw new HttpException('Error creating cart for user', HttpStatus.SERVICE_UNAVAILABLE);

    return createdCart;
  }
}
