import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VotesComponent } from './countainer/votes.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';

@NgModule({
  declarations: [VotesComponent, GalleryItemComponent],
  exports: [VotesComponent, GalleryItemComponent],
  imports: [CommonModule, HttpClientModule]
})
export class VotesModule {}
