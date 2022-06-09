import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCartDto } from '../../dto/create-cart.dto';
import { Cart } from '../../entities/cart.entity';
import { CartService } from '../../services/cart/cart.service';
import { UpdateCartDto } from '../../dto/update-cart.dto';
import { CartDto } from '../../dto/cart.dto';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  createCart(cart: CreateCartDto): Promise<CartDto> {
    return this.cartService.create(cart);
  }

  @Get(':id')
  getCart(id: number): Promise<CartDto> {
    return this.cartService.findOne(id);
  }

  @Put(':id')
  updateCart(cart: UpdateCartDto): Promise<CartDto> {
    return this.cartService.update(cart);
  }
}
