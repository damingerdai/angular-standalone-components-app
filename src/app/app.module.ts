import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonListComponent } from './button-list/button-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
