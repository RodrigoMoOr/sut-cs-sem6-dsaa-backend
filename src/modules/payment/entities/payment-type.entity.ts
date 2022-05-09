import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payment_type')
export class PaymentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
