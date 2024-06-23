// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component'; // Ajusta la ruta según la ubicación de AhorcadoComponent

const routes: Routes = [
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: '', redirectTo: '/ahorcado', pathMatch: 'full' }, // Redirigir a ahorcado por defecto
  // Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
