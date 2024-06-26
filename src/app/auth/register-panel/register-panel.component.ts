import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import {AuthOperationType} from '../../shared/enums/auth-operation-type.model';
import {
  confirmPasswordValidator,
  getFormControlErrorMessage,
  requiredCheckboxValidator,
} from '../../shared/utils/form.utils';
import {AuthToolbarComponent} from '../../shared/components/auth-toolbar/auth-toolbar.component';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {AuthPlatformsComponent} from '../../shared/components/auth-platforms/auth-platforms.component';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss'],
  standalone: true,
  imports: [
    AuthToolbarComponent,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    NgIf,
    MatIcon,
    MatIconButton,
    MatCheckbox,
    MatError,
    MatButton,
    AuthPlatformsComponent,
    MatLabel,
  ],
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

  ngOnInit(): void {
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

  submit(): void {
    this.isSubmitClicked = true;
    console.log(this.registerForm);
  }

  getFormControlErrorMessage(formControl: FormControl): string {
    return getFormControlErrorMessage(formControl);
  }
}
