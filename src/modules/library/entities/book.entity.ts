import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isbn10: string;

  @Column()
  isbn13: string;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  description: string;

  @Column()
  coverImageURL: string;

  @Column()
  price: number;

  @Column()
  publisher: string;

  @Column()
  releaseData: Date;

  @Column()
  rating: number;
}
