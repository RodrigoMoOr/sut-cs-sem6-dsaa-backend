import { Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from '../../library/entities/book.entity';
import { JoinTable } from 'typeorm/browser';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Book)
  @JoinTable()
  books: Book[];

  // TODO: one to one relationship to user entity (pending merge from another PR)
}
