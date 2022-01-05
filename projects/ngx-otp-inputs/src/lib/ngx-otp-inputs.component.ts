import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { NgxOtpConfig, NgxOtpEvent, OtpInputTypes } from './interfaces';

@Component({
  selector: 'ngx-otp-inputs',
  templateUrl: 'ngx-otp-inputs.component.html',
  styleUrls: ['./ngx-otp-inputs.component.scss']
})

export class NgxOtpInputsComponent implements OnInit {

  inputForm!: FormArray;
  inputDisabled!: boolean ;

  inputIds: any = [];

  patterns: any = {
    [OtpInputTypes.text]: "^[a-zA-Z0-9]+$",
    [OtpInputTypes.number]: "^[0-9]+$",
    [OtpInputTypes.password]: "^[a-zA-Z0-9]+$"
  }
  
  otpConfig: NgxOtpConfig = {
    otpLength: 4,
    autoFocus: true,
    autoblur: true,
    inputType: OtpInputTypes.number,
    showLabel: true,
    label: 'Verification Code',
    classList: {
      input: "__input",
      inputWrapper: "__otp-wrapper",
      inputGroup: "__otp-group",
      inputContainer: "__otp-container",
    }
  };

  @Input() set config(c: NgxOtpConfig) {
    this.otpConfig = { ...this.otpConfig, ...c };
    this.initForm();
  }

  @Input() set disabled(c: boolean) {
    this.inputDisabled = c;
  }

  @Output()  onOtpChange = new EventEmitter<any>();
  @Output()  onOtpFilled = new EventEmitter<any>();

  constructor(private _fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    console.log(this.otpConfig, "otpConfig");
  }

  initForm(){
    this.inputForm = this._fb.array([]);
    this.inputIds = [];
    for (let i = 0; i < this.otpConfig.otpLength; i++) {
      this.inputIds.push("__otp-input-" + i);
      let formControl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(1), Validators.pattern(this.patterns[this.otpConfig.inputType!])]));

      this.inputForm.push(formControl);
    }

    if(this.inputDisabled) this.inputForm.disable();

    setTimeout(() => {
      if(this.otpConfig.autoFocus) {
        let input:any = document.getElementById(this.inputIds[0]);
        if(input) {
          input.focus();
          input.select();
        }
      }
    })
  }

  otpOnKeyUp(control: FormControl, event: any, i: number){
    let inputVal = this.inputForm.getRawValue();

    let output: NgxOtpEvent = {
      input: inputVal,
      value: inputVal.join(""),
      valid: this.inputForm.valid
    }
    
    if(control.valid && event.keyCode != 8 && i < this.inputForm.controls.length - 1) {
      let input:any = document.getElementById(this.inputIds[i + 1]);
      if(input){
        input.focus();
        input.select();
      }
    } else if(i == this.inputForm.controls.length - 1 && event.keyCode != 8){
      let input:any = document.getElementById(this.inputIds[i]);
      input.blur();
      this.onOtpFilled.emit(output);
    } else if(event.keyCode == 8) {
      let input:any = document.getElementById(this.inputIds[i - 1]);
      if(input){
        input.focus();
        input.select();
      }
    }

    this.onOtpChange.emit(output);
  }

  otpOnFocus(control: FormControl, event: any, i: number){
    let input:any = document.getElementById(this.inputIds[i]);
    if(input){
      input.focus();
      input.select();
    }
  }

}
