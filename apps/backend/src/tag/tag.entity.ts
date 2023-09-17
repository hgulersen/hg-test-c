import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity()
export class Tag {
  @PrimaryKey({ type: 'number' })
  id: number;

  @Unique()
  @Property()
  tag: string;
}
