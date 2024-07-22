import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((x) => x.AuthRoutingModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home-routing.module').then((x) => x.HomeRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
