import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ICandidate } from 'src/app/interfaces';
import { GalleryItemComponent } from './gallery-item.component';

describe('gallery-item.component.ts', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;
  const candidateMock: ICandidate = {
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
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryItemComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get actionVote()', () => {
    it('calls get method with `actionVote`', () => {
      spyOn(component.voteForm, 'get');

      const actionVote = component.actionVote;

      expect(component.voteForm.get).toHaveBeenCalledWith('actionVote');
    });
  });

  describe('get profilePicture()', () => {
    it('returns empty string, when candidate is undefined', () => {
      expect(component.profilePicture).toEqual('');
    });

    it('returns porfile picture url string, when candidate is defined', () => {
      component.candidate = candidateMock;

      expect(component.profilePicture).toEqual(
        'url(assets/images/kanye-west.jpg)'
      );
    });
  });

  describe('get upPercentage()', () => {
    it('returns zero, when candidate is undefined', () => {
      expect(component.upPercentage).toEqual(0);
    });

    it('returns the percentage of up votes, when candidate is defined', () => {
      component.candidate = candidateMock;

      expect(component.upPercentage).toEqual(64);
    });
  });

  describe('get downPercentage()', () => {
    it('returns zero, when candidate is undefined', () => {
      expect(component.downPercentage).toEqual(0);
    });

    it('returns the percentage of down votes, when candidate is defined', () => {
      component.candidate = candidateMock;

      expect(component.downPercentage).toEqual(36);
    });
  });

  describe('vote()', () => {
    beforeEach(() => {
      component.candidate = JSON.parse(JSON.stringify(candidateMock));
    });

    it('sets actionVote with null value', () => {
      spyOn(component.voteForm.controls.actionVote, 'setValue');
      const { setValue } = component.voteForm.controls.actionVote;

      component.vote();

      expect(setValue).toHaveBeenCalledWith(null);
    });

    it('increments down vote by 1', () => {
      component.voteForm.controls.actionVote.setValue('down');
      const currentValue = component.candidate.votes.down;

      component.vote();

      expect(component.candidate.votes.down).toEqual(currentValue + 1);
    });

    it('increments up vote by 1', () => {
      component.voteForm.controls.actionVote.setValue('up');
      const currentValue = component.candidate.votes.up;

      component.vote();

      expect(component.candidate.votes.up).toEqual(currentValue + 1);
    });

    it('sets isAbleToVote to false', () => {
      component.isAbleToVote = true;

      component.vote();

      expect(component.isAbleToVote).toBeFalsy();
    });
  });

  describe('enableVote()', () => {
    it('sets isAbleToVote to true', () => {
      component.isAbleToVote = false;

      component.enableVote();

      expect(component.isAbleToVote).toBeTruthy();
    });
  });
});
