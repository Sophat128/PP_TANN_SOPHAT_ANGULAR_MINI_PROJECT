import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordValidatorDirective,
    multi: true
  }]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (control.value && !passwordRegex.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
  }
}
