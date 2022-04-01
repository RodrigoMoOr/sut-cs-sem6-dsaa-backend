import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PaymentModule } from './modules/payment/payment.module';
import { CartModule } from './modules/cart/cart.module';
import { LibraryModule } from './modules/library/library.module';

@Module({
  imports: [AuthModule, UserModule, PaymentModule, CartModule, LibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
