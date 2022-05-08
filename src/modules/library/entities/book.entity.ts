import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './author.entity';
import { Genre } from './genre.entity';

@Entity('book')
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

  @ManyToOne(() => Author, author => author.books)
  author: Author;

  @ManyToOne(() => Genre, genre => genre.books)
  genre: Genre;
}
