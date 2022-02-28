import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaumPostcodeModule } from 'projects/ngx-daum-postcode/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDaumPostcodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
