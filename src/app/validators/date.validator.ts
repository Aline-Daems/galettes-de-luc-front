import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function DateValidator(): ValidatorFn {

  return (
    control: AbstractControl
  ): ValidationErrors | null => {
    const today = new Date()
    const inputDate = new Date(control.value)

    if (inputDate < today) {
      return {

        notInThePast: "Date can't be in the past"

      }
    } else {
      return null

    }
  }

}
