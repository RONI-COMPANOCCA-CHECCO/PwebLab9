import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {
  palabra = 'ANGULAR';
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;

  constructor() {
    this.palabraOculta = '_'.repeat(this.palabra.length);
  }

  comprobar(letra: string) {
    if (this.palabra.includes(letra)) {
      // Actualiza palabraOculta con la letra correcta
      let nuevaPalabraOculta = '';
      for (let i = 0; i < this.palabra.length; i++) {
        if (this.palabra[i] === letra) {
          nuevaPalabraOculta += letra;
        } else {
          nuevaPalabraOculta += this.palabraOculta[i];
        }
      }
      this.palabraOculta = nuevaPalabraOculta;
      this.verificaGane();
    } else {
      this.intentos++;
      this.verificaPerdida();
    }
  }

  verificaGane() {
    if (this.palabraOculta === this.palabra) {
      this.gano = true;
    }
  }

  verificaPerdida() {
    if (this.intentos >= 9) {
      this.perdio = true;
    }
  }
}
