import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { MarriageStatus } from 'src/core/enumerations';
import { Vote } from 'src/votes/vote.entity';

@Entity()
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Exclude()
  username: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column({ enum: MarriageStatus })
  marriageStatus: string;

  @OneToMany(
    type => Vote,
    vote => vote.user
  )
  votes: Vote[];

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updatedAt: Date;
}
