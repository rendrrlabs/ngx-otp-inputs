import { Component, OnInit } from '@angular/core';
import { NgxOtpConfig, NgxOtpEvent } from 'ngx-otp-inputs';

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
