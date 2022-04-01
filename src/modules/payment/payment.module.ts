import { Module } from '@nestjs/common';
import { PaymentController } from './controllers/payment/payment.controller';

@Module({
  controllers: [PaymentController]
})
export class PaymentModule {}
