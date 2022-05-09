import { Payment } from './payment.entity';
import { CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('payment_history')
export class PaymentHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Payment, payment => payment.paymentHistory)
  payments: Payment[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
