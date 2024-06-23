import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

@NgModule({
  declarations: [
    AppComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

