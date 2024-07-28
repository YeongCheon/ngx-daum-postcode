import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  output,
  Renderer2,
} from '@angular/core';

declare let daum: any;

@Component({
  selector: 'ngx-daum-postcode',
  templateUrl: './ngx-daum-postcode.component.html',
  styleUrls: ['./ngx-daum-postcode.component.scss'],
})
export class NgxDaumPostcodeComponent implements OnInit {
  onComplete = output<DaumPostcode>();

  onResize = output<Size>();

  onSearch = output<Search>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private hostElement: ElementRef,
  ) {}

  ngOnInit(): void {
    const src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const scriptElement = this.renderer.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = src;
    scriptElement.onload = () => {
      this.initDaumPostcode();
    };

    this.renderer.appendChild(this.document.body, scriptElement);
  }

  private initDaumPostcode() {
    new daum.Postcode({
      width: '100%',
      height: '100%',
      oncomplete: (data: DaumPostcode) => {
        this.onComplete.emit(data);
      },
      onresize: (data: Size) => {
        this.onResize.emit(data);
      },
      onsearch: (data: Search) => {
        this.onSearch.emit(data);
      },
    }).embed(this.hostElement.nativeElement);
  }
}

export interface Size {
  width: number;
  height: number;
}

export interface Search {
  q: string;
  count: number;
}

export interface DaumPostcode {
  postcode: string;
  postcode1: string;
  postcode2: string;
  postcodeSeq: string;
  zonecode: string;
  address: string;
  addressEnglish: string;
  addressType: string;
  bcode: string;
  bname: string;
  bnameEnglish: string;
  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguEnglish: string;
  sigunguCode: string;
  userLanguageType: string;
  query: string;
  buildingName: string;
  buildingCode: string;
  apartment: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  roadAddress: string;
  roadAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  userSelectedType: string;
  noSelected: string;
  hname: string;
  roadnameCode: string;
  roadname: string;
  roadnameEnglish: string;
}
