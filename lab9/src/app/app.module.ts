import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component'; // Ajusta la ruta según la ubicación de AhorcadoComponent
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto, ajusta según tu necesidad
  { path: 'home', component: AppComponent }, // Ruta por defecto, ajusta según tu necesidad
  { path: 'ahorcado', component: AhorcadoComponent },
  // Otras rutas si las tienes
];

@NgModule({
  declarations: [
    AppComponent,
    AhorcadoComponent
    // Asegúrate de agregar todos los componentes que tengas aquí
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
