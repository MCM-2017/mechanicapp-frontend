import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPanelComponent} from "./login-panel/login-panel.component";
import {RegisterPanelComponent} from "./register-panel/register-panel.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPanelComponent
  },
  {
    path: 'register',
    component: RegisterPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
