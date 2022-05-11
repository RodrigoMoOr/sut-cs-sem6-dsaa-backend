import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '../../entities/cart.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from '../../dto/create-cart.dto';
import { UpdateCartDto } from '../../dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectRepository(Cart) private readonly cartRepository: Repository<Cart>) {}

  async create(cart: CreateCartDto): Promise<Cart> {
    const createdCart = await this.cartRepository.create(cart);

    if (!createdCart) throw new HttpException('Error creating cart for user', HttpStatus.SERVICE_UNAVAILABLE);

    return createdCart;
  }

  async findOne(id: number): Promise<Cart> {
    const foundCart = await this.cartRepository.findOne(id);

    if (!foundCart) throw new HttpException('Cart not found', HttpStatus.NOT_FOUND);

    return foundCart;
  }

  async update(cart: UpdateCartDto): Promise<Cart> {
    const existingCart = await this.findOne(cart.id);

    await this.cartRepository.update(existingCart.id, cart);

    return await this.findOne(existingCart.id);
  }
}
