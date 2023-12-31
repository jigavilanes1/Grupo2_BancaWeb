import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppComponent } from '../app.component';
import { RegistroComponent } from '../registro/registro.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

