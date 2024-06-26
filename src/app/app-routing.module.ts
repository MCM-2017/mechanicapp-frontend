import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./auth/login-panel/login-panel.component').then(
        (x) => x.LoginPanelComponent,
      ),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./auth/register-panel/register-panel.component').then(
        (x) => x.RegisterPanelComponent,
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/dashboard/dashboard.component').then(
        (x) => x.DashboardComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
