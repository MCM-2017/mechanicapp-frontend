import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {globalReducer} from './store/global.reducer';
import {IconConfigurationService} from './core/services/icon-configuration.service';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ global: globalReducer }),
  ],
  providers: [provideHttpClient(), IconConfigurationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
