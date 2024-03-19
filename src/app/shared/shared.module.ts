import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AuthToolbarComponent } from './components/auth-toolbar/auth-toolbar.component';
import { RouterLink } from '@angular/router';
import { AuthPlatformsComponent } from './components/auth-platforms/auth-platforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeThemeToggleComponent } from './components/change-theme-toggle/change-theme-toggle.component';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    AuthToolbarComponent,
    AuthPlatformsComponent,
    ChangeThemeToggleComponent,
  ],
  imports: [MaterialModule, RouterLink, FormsModule, NgIf],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthToolbarComponent,
    AuthPlatformsComponent,
  ],
})
export class SharedModule {}
