import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  palabras: string[] = ['ANGULAR', 'JAVA', 'PROGRAMACION', 'JAVASCRIPT', 'HTML', 'CSS'];
  palabraSeleccionada: string = '';
  palabraOculta: string = '';
  intentosMaximos: number = 9;
  intentosRestantes: number = 0;
  letrasUsadas: Set<string> = new Set(); // Utilizar Set en lugar de string[]
  gano: boolean = false;
  perdio: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.iniciarJuego();
  }

  iniciarJuego(): void {
    this.palabraSeleccionada = this.seleccionarPalabraAleatoria();
    this.palabraOculta = '_'.repeat(this.palabraSeleccionada.length);
    this.intentosRestantes = this.intentosMaximos;
    this.letrasUsadas.clear(); // Utilizar clear() para limpiar el Set
    this.gano = false;
    this.perdio = false;
  }

  seleccionarPalabraAleatoria(): string {
    const indice = Math.floor(Math.random() * this.palabras.length);
    return this.palabras[indice];
  }

  comprobar(letra: string): void {
    if (this.letrasUsadas.has(letra)) {
      return; // Salir si la letra ya fue utilizada
    }

    this.letrasUsadas.add(letra);

    if (this.palabraSeleccionada.includes(letra)) {
      let nuevaPalabraOculta = '';
      for (let i = 0; i < this.palabraSeleccionada.length; i++) {
        nuevaPalabraOculta += this.palabraSeleccionada[i] === letra ? letra : this.palabraOculta[i];
      }
      this.palabraOculta = nuevaPalabraOculta;
      this.verificarVictoria();
    } else {
      this.intentosRestantes--;
      this.verificarDerrota();
    }
  }

  verificarVictoria(): void {
    if (this.palabraSeleccionada === this.palabraOculta) {
      this.gano = true;
    }
  }

  verificarDerrota(): void {
    if (this.intentosRestantes === 0) {
      this.perdio = true;
    }
  }

  reiniciarJuego(): void {
    this.iniciarJuego();
  }
}
