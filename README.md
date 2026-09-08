# NgxDaumPostcode

카카오에서 제공하는 [우편번호 서비스](https://postcode.map.daum.net/guide)를 Angular 환경에서 편하게 사용하기 위해 감싼 WrapperComponent를 제공하는 비공식 라이브러리입니다.

## 호환성

| ngx-daum-postcode | Angular |
|-------------------|---------|
| 22.x              | >= 22   |
| 19.x              | 19      |
| 18.x              | ^18.1   |
| 17.x              | 17      |
| 16.x              | 16      |
| 15.x              | 15      |
| 14.x              | 14      |
| 13.x              | 13      |

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
  Search,
  Size,
} from "ngx-daum-postcode";

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

## 개발

``` bash
npm ci
npm run build:lib   # 라이브러리 빌드 (dist/ngx-daum-postcode)
npm start           # 예제 앱 실행 (라이브러리 빌드 후)
npm test            # 테스트
npm run lint        # 린트
```

예제 앱은 빌드된 `dist/ngx-daum-postcode`를 참조하므로, 실행 전에 `npm run build:lib`를 먼저 수행해야 합니다.
