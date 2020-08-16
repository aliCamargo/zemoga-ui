import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICandidate } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(private readonly _httpClient: HttpClient) {}

  public async getCandidates(): Promise<ICandidate[]> {
    try {
      return await this._httpClient
        .get<ICandidate[]>('api/candidates')
        .toPromise();
    } catch (e) {
      console.warn(e);
      return Promise.resolve([]);
    }
  }
}
