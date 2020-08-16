import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerModule, BodyModule, FooterModule } from './components/intex';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BannerModule, BodyModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
