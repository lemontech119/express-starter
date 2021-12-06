import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Test } from '@interfaces/tests.interface';

@Entity("test")
export class TestEntity implements Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  body: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
