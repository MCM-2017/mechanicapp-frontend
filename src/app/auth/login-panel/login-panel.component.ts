import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  get emailControl(): FormControl {
    return <FormControl>this.loginForm.controls['email'];
  }

  get passwordControl(): FormControl {
    return <FormControl>this.loginForm.controls['password'];
  }

  private iconsPath = '../../assets/icons/';

  constructor(
    private _fb: FormBuilder,
    private _matIconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
  ) {
    this.setRegistryIcon('google');
    this.setRegistryIcon('facebook');
    this.setRegistryIcon('twitter');
  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.loginForm);
  }

  emailErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailControl.hasError('email') ? 'Not a valid email' : '';
  }

  passwordErrorMessage() {
    return this.passwordControl.hasError('required')
      ? 'You must enter a value'
      : '';
  }

  private setRegistryIcon(name: string) {
    this._matIconRegistry.addSvgIcon(
      name,
      this.setPath(`${this.iconsPath}${name}.svg`),
    );
  }

  private setPath(url: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
