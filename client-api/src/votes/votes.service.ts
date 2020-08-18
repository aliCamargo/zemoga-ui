import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal, DeleteResult } from 'typeorm';
import { UsersService } from 'src/users';

import { Vote } from './vote.entity';
import { VoteDto } from './vote.dto';

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(Vote) private readonly _votesRepository: Repository<Vote>,
    private readonly _usersService: UsersService
  ) {}

  async showAll(): Promise<Vote[]> {
    return await this._votesRepository.find({ relations: ['user'] });
  }

  async showAllByUserId(userId: number): Promise<Vote[]> {
    return await this._votesRepository.find({ userId: Equal(userId) });
  }

  async create(data: Partial<VoteDto>): Promise<Vote> {
    const userId = data.userId;
    const vote = await this._votesRepository.create(data);

    await this._votesRepository.save(vote);

    return this.findOne(vote.id);
  }

  async findOne(id: number): Promise<Vote> {
    return this._votesRepository.findOne(id, { relations: ['user'] });
  }

  async update(id: number, data: Partial<VoteDto>): Promise<Vote> {
    delete data.userId;

    await this._votesRepository.update(id, data);

    return this.findOne(id);
  }

  async destroy(id: number): Promise<DeleteResult> {
    return await this._votesRepository.delete(id);
  }
}
