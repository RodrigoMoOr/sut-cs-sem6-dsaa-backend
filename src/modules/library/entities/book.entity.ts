import { Column, Entity, ManyToOne } from 'typeorm';
import { Author } from './author.entity';
import { Genre } from './genre.entity';
import { BaseEntity } from '../../core/entities/BaseEntity';

@Entity('book')
export class Book extends BaseEntity {
  @Column({ nullable: true })
  isbn10: string;

  @Column({ nullable: true })
  isbn13: string;

  @Column()
  title: string;

  @Column({ nullable: true })
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
