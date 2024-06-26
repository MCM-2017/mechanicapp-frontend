import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconTestingModule} from '@angular/material/icon/testing';
import {StoreModule} from '@ngrx/store';
import {globalReducer} from './store/global.reducer';
import {MatButton} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconTestingModule,
    StoreModule.forRoot({ global: globalReducer }),
    MatButton,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
