# NgxDaumPostcode

카카오에서 제공하는 [우편번호 서비스](https://postcode.map.daum.net/guide)를 Angular 환경에서 편하게 사용하기 위해 감싼 WrapperComponent를 제공하는 비공식 라이브러리입니다.

## 사용법

### npm install

``` bash
npm i ngx-daum-postcode
```

### app.component.html
``` html
<ngx-daum-postcode
  (onComplete)="onComplete($event)"
  (onSearch)="onSearch($event)"
  (onResize)="onResize($event)"
></ngx-daum-postcode>
```

### app.component.ts
``` typescript
import { Component } from "@angular/core";
import {
  DaumPostcode,
  NgxDaumPostcodeComponent,
  Size,
  Search,
} from "projects/ngx-daum-postcode/src/public-api";

@Component({
  selector: "app-root",
  imports: [NgxDaumPostcodeComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ngxDaumPostcode Example";

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

```
