import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthOperationType } from '../../enums/auth-operation-type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-platforms',
  templateUrl: './auth-platforms.component.html',
  styleUrls: ['./auth-platforms.component.scss'],
})
export class AuthPlatformsComponent {
  @Input() authOperationType!: AuthOperationType;

  get footerQuestionText() {
    return this.authOperationType === AuthOperationType.Login
      ? "Don't have an account?"
      : 'Already have an account?';
  }

  get footerOperationText() {
    return this.authOperationType === AuthOperationType.Login
      ? 'Sign up'
      : 'Sign in';
  }

  private iconsPath = '../../assets/icons/';

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _router: Router,
  ) {
    this.setRegistryIcon('google');
    this.setRegistryIcon('facebook');
    this.setRegistryIcon('twitter');
  }

  navigate() {
    this._router
      .navigate([
        this.authOperationType === AuthOperationType.Login
          ? '/auth/register'
          : '/auth/login',
      ])
      .then();
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
