import { Module } from '@nestjs/common';
import { PaymentController } from './controllers/payment/payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentHistory } from './entities/payment-history.entity';
import { PaymentType } from './entities/payment-type.entity';
import { TransactionType } from './entities/transaction-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, PaymentHistory, PaymentType, TransactionType])],
  controllers: [PaymentController],
})
export class PaymentModule {}
