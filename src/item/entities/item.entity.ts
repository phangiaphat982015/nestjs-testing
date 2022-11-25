import { BaseEntity } from '../../db/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('clauses')
export class ItemEntity extends BaseEntity {
  @Column()
  name: string;
}
