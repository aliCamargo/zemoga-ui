import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from 'src/users/users.module';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { Vote } from './vote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vote]), UsersModule],
  providers: [VotesService],
  controllers: [VotesController]
})
export class VotesModule {}
