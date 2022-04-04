import { Module } from '@nestjs/common';
import { CartController } from './controllers/cart/cart.controller';

@Module({
  controllers: [CartController]
})
export class CartModule {}
