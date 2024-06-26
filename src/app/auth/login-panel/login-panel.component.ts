import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import {AuthOperationType} from '../../shared/enums/auth-operation-type.model';
import {getFormControlErrorMessage} from '../../shared/utils/form.utils';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {noop} from 'rxjs';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {AuthToolbarComponent} from '../../shared/components/auth-toolbar/auth-toolbar.component';
import {MatButton, MatIconButton} from '@angular/material/button';
import {AuthPlatformsComponent} from '../../shared/components/auth-platforms/auth-platforms.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    AuthToolbarComponent,
    ReactiveFormsModule,
    MatIconButton,
    AuthPlatformsComponent,
    MatButton,
    NgIf,
    MatError,
  ],
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

  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit(): void {
    const email = this.emailControl.value ?? '';
    const password = this.passwordControl.value ?? '';
    this._authService.login(email, password).subscribe({
      next: (logged) => {
        this._router.navigate(['/home']).then(noop);
      },
      error: (err) => {},
    });
  }

  getFormControlErrorMessage(formControl: FormControl): string {
    return getFormControlErrorMessage(formControl);
  }
}
