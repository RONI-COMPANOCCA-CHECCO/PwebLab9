import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component'; // Ajusta la ruta según la ubicación de AhorcadoComponent

const routes: Routes = [
  { path: 'ahorcado', component: AhorcadoComponent },
  // Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
