import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagens' }) // CREATE TABLE tb_postagens()
export class Postagem {
  @PrimaryGeneratedColumn() // INT AUTO_INCREMENT PRIMARY KEY
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // Validação dos dados do objeto
  @Column({ length: 100, nullable: false }) // VARCHAR(100) NOT FULL
  titulo: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // Validação dos dados do objeto
  @Column({ length: 1000, nullable: false }) // VARCHAR(1000) NOT FULL
  texto: string;

  @UpdateDateColumn()
  data: Date;
}
