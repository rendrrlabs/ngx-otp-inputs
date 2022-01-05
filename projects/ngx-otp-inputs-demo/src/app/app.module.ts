import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxOtpInputsModule } from "ngx-otp-inputs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOtpInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
