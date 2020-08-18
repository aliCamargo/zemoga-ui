import { Injectable } from '@nestjs/common';
import { CANDIDATES } from './mock/candidates.mock';
import { ICandidate } from './core/interfaces/candidates.interface';

@Injectable()
export class AppService {
  candidates = CANDIDATES;

  getHello(): string {
    return 'Hello World!';
  }

  async getCandidates(): Promise<ICandidate[]> {
    return await this.candidates;
  }
}
