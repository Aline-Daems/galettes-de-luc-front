import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function ReceiptValidator(frozen: string): ValidatorFn {

  return (
    control: AbstractControl
  ): ValidationErrors | null => {


    const frozenValue = control.get(frozen)?.value;
    const frozenInput = control?.value;

    if (!frozenValue && frozenInput) {
      console.log("le champs frozentemp devrait être requis");

      return {
        required: "Ne peut pas être vide"

      }


    } else {

      return null
    }
  }


}
