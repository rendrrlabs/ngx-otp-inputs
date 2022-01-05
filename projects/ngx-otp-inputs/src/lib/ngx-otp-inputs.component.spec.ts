import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOtpInputsComponent } from './ngx-otp-inputs.component';

describe('NgxOtpInputsComponent', () => {
  let component: NgxOtpInputsComponent;
  let fixture: ComponentFixture<NgxOtpInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOtpInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOtpInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
