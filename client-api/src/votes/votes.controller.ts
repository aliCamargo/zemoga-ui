import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete
} from '@nestjs/common';
import { VotesService } from './votes.service';
import { Vote } from './vote.entity';
import { VoteDto } from './vote.dto';
import { DeleteResult } from 'typeorm';

@Controller('votes')
export class VotesController {
  constructor(private readonly _votesService: VotesService) {}

  @Get()
  async showAll(): Promise<Vote[]> {
    return await this._votesService.showAll();
  }

  @Get('byUserId/:userId')
  async showAllByUserId(@Param('userId') userId: number): Promise<Vote[]> {
    return await this._votesService.showAllByUserId(userId);
  }

  @Post()
  async createVote(@Body() data: VoteDto) {
    console.log(data);
    return await this._votesService.create(data);
  }

  @Get(':id')
  async readVote(@Param('id') id: number): Promise<Vote> {
    return await this._votesService.findOne(id);
  }

  @Put(':id')
  async updateVote(
    @Param('id') id: number,
    @Body() data: VoteDto
  ): Promise<Vote> {
    return await this._votesService.update(id, data);
  }

  @Delete(':id')
  async destroyVote(@Param('id') id: number): Promise<DeleteResult> {
    return await this._votesService.destroy(id);
  }
}
