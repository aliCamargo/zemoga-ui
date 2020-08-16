import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CandidateService } from './candidate.service';
import { ICandidate } from '../interfaces';

describe('candidate.service.ts', () => {
  let service: CandidateService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  const responseMock: ICandidate[] = [
    {
      id: 1,
      name: 'Kanye West',
      time_ago: '1 month',
      industry: 'Entertaiment',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      profile_picture: 'kanye-west.jpg',
      votes: {
        up: 64,
        down: 36
      }
    },
    {
      id: 2,
      name: 'Mark Zuckerberg',
      time_ago: '1 month',
      industry: 'Business',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      profile_picture: 'mark-zuckerberg.jpg',
      votes: {
        up: 36,
        down: 64
      }
    }
  ];

  beforeEach(() => {
    httpClient = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
    httpClient.get.and.callThrough();

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HttpClient, useValue: httpClient }]
    });
    service = TestBed.inject(CandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCandidates()', () => {
    it('calls the REST URL that return the candidates list', () => {
      service.getCandidates();
      const url = httpClient.get.calls.mostRecent().args[0];

      expect(url).toContain('api/candidates');
    });

    it('returns an array with the candidates list', async () => {
      spyOn(service, 'getCandidates').and.returnValue(
        Promise.resolve(responseMock)
      );

      const apiResponse: ICandidate[] = await service.getCandidates();

      expect(apiResponse.length).toBe(2);
    });

    it('logs the proper error when throwing an exception', () => {
      const consoleWarnMock = spyOn(console, 'warn');

      httpClient.get.and.throwError('');
      service.getCandidates();

      expect(consoleWarnMock).toHaveBeenCalled();
    });
  });
});
