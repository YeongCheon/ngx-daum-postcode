import { TestBed } from '@angular/core/testing';

import { NgxDaumPostcodeService } from './ngx-daum-postcode.service';

describe('NgxDaumPostcodeService', () => {
  let service: NgxDaumPostcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDaumPostcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
