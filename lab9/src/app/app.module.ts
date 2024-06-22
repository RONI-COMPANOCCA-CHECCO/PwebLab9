import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    AppComponent
    // Aquí puedes añadir otros componentes si los tienes
  ],
  imports: [
    BrowserModule
    // Aquí puedes añadir otros módulos que necesites (por ejemplo, FormsModule, HttpClientModule, etc.)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
