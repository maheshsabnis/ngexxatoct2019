import { AbstractControl } from '@angular/forms';

export class StringDataValidator {
  // the method will return 'null' if the value is valid
  // else it will return JSON object as {invalid:true} / {valid:false}
  // thats the reason the method has return type as 'any'
  // the input parameter is AbstractContro, if you are validating against the
  // control, else it can be primptive type e.g. string, number, etc.
  static checkFirstCharacterUpperCase(ctrl: AbstractControl): any {
    let data: string = ctrl.value;
    let char = data[0];
    console.log(char);
    if (char === 'A' || char === 'B') {
      return null;
    } else {
      return { invalid: true };
    }
  }
}
