import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AuthToolbarComponent } from './components/auth-toolbar/auth-toolbar.component';
import { RouterLink } from '@angular/router';
import { AuthPlatformsComponent } from './components/auth-platforms/auth-platforms.component';

@NgModule({
  declarations: [AuthToolbarComponent, AuthPlatformsComponent],
  imports: [MaterialModule, RouterLink],
  exports: [MaterialModule, AuthToolbarComponent, AuthPlatformsComponent],
})
export class SharedModule {}
