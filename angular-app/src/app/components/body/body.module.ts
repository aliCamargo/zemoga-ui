import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './container/body.component';
import {
  MessageComponent,
  SubmitFormComponent,
  VotesModule
} from './components/intex';

@NgModule({
  declarations: [BodyComponent, MessageComponent, SubmitFormComponent],
  exports: [BodyComponent],
  imports: [CommonModule, VotesModule]
})
export class BodyModule {}
