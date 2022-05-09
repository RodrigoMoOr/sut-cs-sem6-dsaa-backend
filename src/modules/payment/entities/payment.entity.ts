import { PaymentHistory } from './payment-history.entity';
import { ManyToOne } from 'typeorm';

export class Payment {
  id: number;
  date: Date;

  @ManyToOne(() => PaymentHistory, paymentHistory => paymentHistory.payments)
  paymentHistory: PaymentHistory;
}
