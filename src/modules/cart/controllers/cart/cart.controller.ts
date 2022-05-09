import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCartDto } from '../../../user/dto/create-cart.dto';
import { Cart } from '../../entities/cart.entity';
import { CartService } from '../../services/cart/cart.service';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  createCart(cart: CreateCartDto): Promise<Cart> {
    return this.cartService.create(cart);
  }
}
