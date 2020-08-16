import { Component, Input } from '@angular/core';
import { ICandidate } from 'src/app/interfaces';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {
  @Input() public candidate: ICandidate;

  public isAbleToVote = true;

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
    // TODO: magic here
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
