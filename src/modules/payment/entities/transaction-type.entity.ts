import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transaction_type')
export class TransactionType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
