import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxOtpInputsComponent } from './ngx-otp-inputs.component';

@NgModule({
  declarations: [
    NgxOtpInputsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxOtpInputsComponent
  ]
})
export class NgxOtpInputsModule { }
