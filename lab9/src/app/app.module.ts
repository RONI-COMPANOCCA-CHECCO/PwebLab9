import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { AhorcadoModule } from './ahorcado/ahorcado.module';
@NgModule({
  declarations: [
    AppComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AhorcadoModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

