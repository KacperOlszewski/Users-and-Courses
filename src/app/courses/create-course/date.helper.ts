import { AbstractControl } from '@angular/forms';

const DATE_REGEXPS: RegExp = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

export function dateValidator(control: AbstractControl) {
    const valueNotProvided: boolean = !control || !control.value;
    const validatePassword = valueNotProvided || DATE_REGEXPS.test(control.value);

    return !validatePassword ? { dateFormat: { valid: false } } : null;
}

export function transformTimestamp(date: string) {
    return new Date(date.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")).getTime()/1000|0
}