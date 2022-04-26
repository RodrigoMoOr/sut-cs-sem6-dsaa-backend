import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entity')
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
