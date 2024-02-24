import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { RegisterPanelComponent } from './register-panel/register-panel.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPanelComponent, RegisterPanelComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule],
  exports: [],
})
export class AuthModule {}
