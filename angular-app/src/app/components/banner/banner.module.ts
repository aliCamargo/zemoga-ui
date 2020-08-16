import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './container/banner.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';

@NgModule({
  declarations: [BannerComponent, MoreInfoComponent],
  exports: [BannerComponent],
  imports: [CommonModule]
})
export class BannerModule {}
