import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async showAll(): Promise<User[]> {
    return await this._usersService.showAll();
  }

  @Post()
  async createUser(@Body() data: UserDto) {
    console.log(data);
    return await this._usersService.create(data);
  }

  @Get(':id')
  async readUser(@Param('id') id: number): Promise<User> {
    return await this._usersService.findOne(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() data: UserDto
  ): Promise<User> {
    return await this._usersService.update(id, data);
  }

  @Delete(':id')
  async destroyUser(@Param('id') id: number): Promise<User> {
    return await this._usersService.destroy(id);
  }
}
