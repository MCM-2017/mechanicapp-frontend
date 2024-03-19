import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-toolbar',
  templateUrl: './auth-toolbar.component.html',
  styleUrls: ['./auth-toolbar.component.scss'],
})
export class AuthToolbarComponent {
  constructor(private _router: Router) {}

  navigateBack(): void {
    this._router.navigate(['/']);
  }
}
