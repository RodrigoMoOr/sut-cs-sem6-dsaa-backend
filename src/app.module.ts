import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PaymentModule } from './modules/payment/payment.module';
import { CartModule } from './modules/cart/cart.module';

@Module({
  imports: [AuthModule, UserModule, PaymentModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
