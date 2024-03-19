import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthOperationType } from '../../shared/enums/auth-operation-type.model';
import { getFormControlErrorMessage } from '../../shared/utils/form.utils';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent implements OnInit {
  loginForm!: FormGroup;
  passwordVisible = false;
  authOperationType = AuthOperationType.Login;

  get emailControl(): FormControl {
    return <FormControl>this.loginForm.controls['email'];
  }

  get passwordControl(): FormControl {
    return <FormControl>this.loginForm.controls['password'];
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.loginForm);
  }

  getFormControlErrorMessage(formControl: FormControl): string {
    return getFormControlErrorMessage(formControl);
  }
}
