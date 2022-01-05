import { Component, OnInit } from '@angular/core';
import { NgxOtpConfig } from 'ngx-otp-inputs';
import { NgxOtpEvent } from 'projects/ngx-otp-inputs/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-otp-inputs-demo';
  otpConfig: NgxOtpConfig = {
    otpLength: 5,
    label: "Enter OTP",
    classList: {
      input: "round"
    }
  };

  ngOnInit(): void {
    
  }

  onOtpChange(event: NgxOtpEvent){
    console.log(event, "on-change");
  }
  onOtpFilled(event: NgxOtpEvent){
    console.log(event, "on-filled");
  }
}
