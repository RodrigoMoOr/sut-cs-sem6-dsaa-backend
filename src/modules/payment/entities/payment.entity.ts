import { PaymentHistory } from './payment-history.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentType } from './payment-type.entity';

@Entity('payment')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @OneToMany(() => PaymentType, (paymentType) => paymentType.payments)
  @JoinColumn()
  paymentType: PaymentType;

  @ManyToOne(() => PaymentHistory, paymentHistory => paymentHistory.payments)
  paymentHistory: PaymentHistory;
}
