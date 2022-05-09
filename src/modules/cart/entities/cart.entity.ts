import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Book } from '../../library/entities/book.entity';
import { JoinTable } from 'typeorm/browser';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Book)
  @JoinTable()
  books: Book[];

  @Column()
  totalItems: number;

  @Column()
  total: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
