import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login-panel/login-panel.component').then(
        (x) => x.LoginPanelComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register-panel/register-panel.component').then(
        (x) => x.RegisterPanelComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
