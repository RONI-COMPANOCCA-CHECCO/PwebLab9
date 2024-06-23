import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

export const routes: Routes = [
  { path: '', component: AhorcadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
