import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/index';
import { ICandidate } from 'src/app/interfaces';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  public candidates: ICandidate[] = [];

  constructor(private readonly _candidateService: CandidateService) {}

  public async ngOnInit(): Promise<void> {
    this.candidates = await this._candidateService.getCandidates();
  }
}
