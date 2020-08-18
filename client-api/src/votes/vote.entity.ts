import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn
} from 'typeorm';
import { VoteType } from 'src/core/enumerations';
import { User } from 'src/users/user.entity';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  candidate: string;

  @Column({ enum: VoteType })
  type: string;

  @Column()
  userId: number;

  @ManyToOne(
    type => User,
    user => user.votes,
    {
      cascade: true
    }
  )
  user: User;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updatedAt: Date;
}
