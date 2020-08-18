import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly _usersRepository: Repository<User>
  ) {}

  async showAll(): Promise<User[]> {
    return await this._usersRepository.find({ relations: ['votes'] });
  }

  async create(data: Partial<UserDto>): Promise<User> {
    const user = await this._usersRepository.create(data);
    await this._usersRepository.save(user);

    return user;
  }

  async findOne(id: number): Promise<User> {
    return this._usersRepository.findOne(id, { relations: ['votes'] });
  }

  async findByUsername(username: string): Promise<User> {
    return this._usersRepository.findOne(
      {
        username: username
      },
      {
        relations: ['votes']
      }
    );
  }

  async update(id: number, data: Partial<UserDto>): Promise<User> {
    await this._usersRepository.update(id, data);

    return this.findOne(id);
  }

  async destroy(id: number): Promise<User> {
    const user = this.findOne(id);

    await this._usersRepository.delete(id);

    return user;
  }
}
