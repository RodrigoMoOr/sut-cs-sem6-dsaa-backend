import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';
import { Genre } from './genre.entity';

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  bio: string;

  @OneToMany(() => Book, book => book.author)
  books: Book[];

  @ManyToMany(() => Genre)
  genres: Genre[];
}
