import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

// Validators

export function confirmPasswordValidator(
  password: string,
  confirmPassword: string,
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors['passwordNotMatch']
    ) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      passwordControl.setErrors({ passwordNotMatch: true });
      confirmPasswordControl.setErrors({ passwordNotMatch: true });
      return { passwordNotMatch: true };
    } else {
      passwordControl.setErrors(null);
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}

export function requiredCheckboxValidator(): ValidatorFn | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === false) {
      return { requiredCheckbox: true };
    } else {
      return null;
    }
  };
}

// Form Control

export function getFormControlErrorMessage(formControl: FormControl): string {
  if (isFieldRequired(formControl)) {
    return 'This field is required';
  } else if (isEmailNotValid(formControl)) {
    return 'Not a valid email';
  } else if (isPasswordNotMatch(formControl)) {
    return 'Passwords do not match';
  } else if (isCheckboxRequired(formControl)) {
    return 'You must check the box';
  }
  return '';
}

export function isFieldRequired(formControl: FormControl): boolean {
  return formControl.hasError('required');
}

export function isEmailNotValid(formControl: FormControl): boolean {
  return formControl.hasError('email');
}

export function isPasswordNotMatch(formControl: FormControl): boolean {
  return formControl.hasError('passwordNotMatch');
}

export function isCheckboxRequired(formControl: FormControl): boolean {
  return formControl.hasError('requiredCheckbox');
}
