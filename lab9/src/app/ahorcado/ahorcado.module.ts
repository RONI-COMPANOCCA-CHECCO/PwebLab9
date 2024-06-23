import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoComponent } from './ahorcado.component';

@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AhorcadoComponent // Si necesitas exportar el componente para usarlo fuera de este módulo
  ]
})
export class AhorcadoModule { }
