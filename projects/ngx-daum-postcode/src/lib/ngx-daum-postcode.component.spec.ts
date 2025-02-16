import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDaumPostcodeComponent } from './ngx-daum-postcode.component';

describe('NgxDaumPostcodeComponent', () => {
  let component: NgxDaumPostcodeComponent;
  let fixture: ComponentFixture<NgxDaumPostcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NgxDaumPostcodeComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDaumPostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
