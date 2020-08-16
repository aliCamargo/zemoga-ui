import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { ICandidate } from 'src/app/interfaces';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {
  @Input() public candidate: ICandidate;

  public isAbleToVote = true;
  public voteForm: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.voteForm = this._formBuilder.group({
      actionVote: [null, Validators.required]
    });
  }

  public get actionVote(): AbstractControl {
    return this.voteForm.get('actionVote');
  }

  public get profilePicture(): string {
    if (!this.candidate) {
      return '';
    }

    return `url(assets/images/${this.candidate.profile_picture})`;
  }

  public get upPercentage(): number {
    if (!this.candidate) {
      return 0;
    }

    return (this.candidate.votes.up * 100) / this._totalVotes;
  }

  public get downPercentage(): number {
    if (!this.candidate) {
      return 0;
    }

    return (this.candidate.votes.down * 100) / this._totalVotes;
  }

  public vote(): void {
    const actionVote = this.voteForm.controls.actionVote.value;

    this.voteForm.controls.actionVote.setValue(null);
    this.candidate.votes[actionVote] += 1;
    this.isAbleToVote = false;
  }

  public enableVote(): void {
    this.isAbleToVote = true;
  }

  private get _totalVotes(): number {
    if (!this.candidate) {
      return 0;
    }

    return this.candidate.votes.up + this.candidate.votes.down;
  }
}
