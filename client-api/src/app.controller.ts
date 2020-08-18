import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ICandidate } from './core/interfaces/candidates.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/candidates')
  getCandidates(): Promise<ICandidate[]> {
    return this.appService.getCandidates();
  }
}
