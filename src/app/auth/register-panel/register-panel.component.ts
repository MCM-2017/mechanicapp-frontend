import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthOperationType } from '../../shared/enums/auth-operation-type.model';
import {
  confirmPasswordValidator,
  getFormControlErrorMessage,
  requiredCheckboxValidator,
} from '../../shared/utils/form.utils';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss'],
})
export class RegisterPanelComponent implements OnInit {
  registerForm!: FormGroup;
  authOperationType = AuthOperationType.Register;
  passwordVisible = false;
  isSubmitClicked = false;

  get firstNameControl(): FormControl {
    return <FormControl>this.registerForm.controls['firstName'];
  }

  get lastNameControl(): FormControl {
    return <FormControl>this.registerForm.controls['lastName'];
  }

  get emailControl(): FormControl {
    return <FormControl>this.registerForm.controls['email'];
  }

  get passwordControl(): FormControl {
    return <FormControl>this.registerForm.controls['password'];
  }

  get confirmPasswordControl(): FormControl {
    return <FormControl>this.registerForm.controls['confirmPassword'];
  }

  get agreeTermsControl(): FormControl {
    return <FormControl>this.registerForm.controls['agreeTerms'];
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this._fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        agreeTerms: [false, requiredCheckboxValidator()],
      },
      { validators: [confirmPasswordValidator('password', 'confirmPassword')] },
    );
  }

  submit() {
    this.isSubmitClicked = true;
    console.log(this.registerForm);
  }

  getFormControlErrorMessage(formControl: FormControl): string {
    return getFormControlErrorMessage(formControl);
  }
}
