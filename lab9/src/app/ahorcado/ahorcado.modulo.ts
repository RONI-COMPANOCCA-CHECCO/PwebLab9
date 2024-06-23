// ahorcado.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Añade CommonModule aquí
import { AhorcadoComponent } from './ahorcado.component';

@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule // Añade CommonModule aquí
  ],
  exports: [
    AhorcadoComponent
  ]
})
export class AhorcadoModule { }
