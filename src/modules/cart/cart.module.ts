import { Module } from '@nestjs/common';
import { CartController } from './controllers/cart/cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  controllers: [CartController],
})
export class CartModule {}
