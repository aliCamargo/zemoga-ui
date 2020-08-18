import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users';
import { VotesModule } from './votes';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, VotesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
