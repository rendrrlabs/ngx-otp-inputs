export const enum OtpInputTypes {
    text = 'text',
    number = 'number',
    password = 'password'
}

interface OtpConfigClass {
    input?: string;
    inputWrapper?: string;
    inputGroup?: string;
    inputContainer?: string;
}

export interface NgxOtpConfig {
    otpLength: number;
    autoFocus?: boolean;
    autoblur?: boolean;
    inputType?: OtpInputTypes.text | OtpInputTypes.number | OtpInputTypes.password,
    showLabel?: boolean;
    label?: string;
    classList?: OtpConfigClass
}

export interface NgxOtpEvent{
    input: string[],
    value: string | number,
    valid: boolean
}