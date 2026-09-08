# ngx-daum-postcode

카카오에서 제공하는 [우편번호 서비스](https://postcode.map.daum.net/guide)를 Angular 환경에서
편하게 사용하기 위해 감싼 WrapperComponent를 제공하는 비공식 라이브러리입니다.

## 설치

```bash
npm install ngx-daum-postcode
```

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

`NgxDaumPostcodeComponent`는 standalone 컴포넌트이므로, 사용할 컴포넌트의 `imports`에 추가하면 됩니다.
우편번호 서비스 스크립트는 컴포넌트가 초기화될 때 자동으로 로드되므로 `index.html`에 별도로 추가할 필요가 없습니다.

### app.component.ts

```typescript
import { Component } from '@angular/core';
import { DaumPostcode, NgxDaumPostcodeComponent, Search, Size } from 'ngx-daum-postcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgxDaumPostcodeComponent],
})
export class AppComponent {
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

### app.component.html

```html
<ngx-daum-postcode
  (onComplete)="onComplete($event)"
  (onSearch)="onSearch($event)"
  (onResize)="onResize($event)"
></ngx-daum-postcode>
```

## Outputs

| 이름         | 타입            | 설명                                                        |
|--------------|-----------------|-------------------------------------------------------------|
| `onComplete` | `DaumPostcode`  | 사용자가 주소를 선택했을 때 선택된 주소 정보와 함께 발생합니다. |
| `onSearch`   | `Search`        | 검색이 수행되었을 때 검색어(`q`)와 결과 수(`count`)를 전달합니다. |
| `onResize`   | `Size`          | 우편번호 서비스 iframe의 크기가 변경되었을 때 발생합니다.       |

`DaumPostcode`, `Search`, `Size` 타입은 라이브러리에서 함께 export 되며,
각 필드의 의미는 [카카오 우편번호 서비스 가이드](https://postcode.map.daum.net/guide)를 참고하세요.

## 크기 조절

컴포넌트의 기본 크기는 `width: 100%`, `height: 500px` 입니다. 필요한 경우 호스트 엘리먼트에
직접 스타일을 지정해 조절할 수 있습니다.

```html
<ngx-daum-postcode style="height: 700px"></ngx-daum-postcode>
```

## License

The MIT License (MIT)

Copyright (c) 2020 YeongCheon Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
