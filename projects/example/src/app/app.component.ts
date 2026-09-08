import { Component } from '@angular/core';
import { DaumPostcode, NgxDaumPostcodeComponent, Search, Size } from 'ngx-daum-postcode';

@Component({
  selector: 'app-root',
  imports: [NgxDaumPostcodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngxDaumPostcode Example';

  onComplete(daumPostcode: DaumPostcode): void {
    console.debug(daumPostcode);
  }

  onResize(size: Size): void {
    console.debug(size);
  }

  onSearch(data: Search): void {
    console.debug(data);
  }
}
