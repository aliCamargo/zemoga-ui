import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICandidate } from '../interfaces/index';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(private readonly _httpClient: HttpClient) {}

  public async getCandidates(): Promise<ICandidate[]> {
    try {
      return await this._httpClient
        .get<ICandidate[]>(`${environment.api_host}/candidates`)
        .toPromise();
    } catch (e) {
      console.warn(e);
      return Promise.resolve([]);
    }
  }
}
