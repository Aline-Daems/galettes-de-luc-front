import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export function PasswordValidator(): ValidatorFn {

  return (
    control: AbstractControl
  ): ValidationErrors | null => {

    const value: string = control.value;
    // vérifie s'il y a un majuscule
    if (!/[A-Z]/.test(value)) {
      return {noUpperCase: true};
    } else {
      return null;
    }

  }
}
