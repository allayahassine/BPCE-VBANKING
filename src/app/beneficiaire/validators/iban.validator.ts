import { AbstractControl, ValidationErrors } from '@angular/forms';

export const IBANValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';

  if (!value) {
    return { ibanError: '* L\'IBAN doit commencer par deux lettres et avoir 27 caractères' };
  }

  let startWith2Letters = /^([A-Z]){2}[0-9]{25}$/g;
  if (startWith2Letters.test(value) === false) {
    return {
      ibanError:
        '* L\'IBAN doit commencer par deux lettres et avoir 27 caractères',
    };
  }

  return null;
};
