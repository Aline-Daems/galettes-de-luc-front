import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function ReceiptValidator(): ValidatorFn {

  return (
    control: AbstractControl
  ): ValidationErrors | null => {


    const frozenValue = control.get('frozen')?.value;
    const frozenTempInput = control.get('frozenTemp');
    const frozenDateInput = control.get('frozenDate');
    const thawedDateInput = control.get('thawedDate');
    const frozenExpirationDateInput = control.get('frozenExpirationDate');
    const frozenDaysInput = control.get('frozenDays');


    if (frozenValue == true && frozenTempInput?.value == "" && frozenTempInput.dirty) {

      return {
        requiredTemp: "Can't be null"
      }

    }

    if (frozenValue == true && frozenDateInput?.value == "" && frozenDateInput?.dirty) {

      return {

        requiredDate: "Can't be null"
      }
    }

    if (frozenValue == true && thawedDateInput?.value == "") {

      return {
        requiredThawedDate: "Can't be null"
      }
    }
    if (frozenValue == true && frozenExpirationDateInput?.value == undefined && frozenExpirationDateInput?.dirty) {

      return {
        requiredExpiration: "Can't be null"
      }
    }
    if (frozenValue == true && frozenDaysInput?.value == "" && frozenDaysInput?.dirty) {
      return {
        requiredDays: "Can't be null"
      }
    }

    return null

  }


}
