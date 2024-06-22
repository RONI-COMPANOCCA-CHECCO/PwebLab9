import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [],
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})

export class AhorcadoComponent implements OnInit {
  palabrasAAdivinar: string[] = ['ANGULAR', 'JAVASCRIPT', 'HTML', 'CSS', 'PROGRAMACION'];
  palabraSecreta: string = '';
  letrasAdivinadas: string[] = [];
  intentosRestantes: number = 6; 

  ngOnInit(): void {
    this.iniciarJuego();
  }

  iniciarJuego(): void {
    const randomIndex = Math.floor(Math.random() * this.palabrasAAdivinar.length);
    this.palabraSecreta = this.palabrasAAdivinar[randomIndex];
    this.letrasAdivinadas = Array(this.palabraSecreta.length).fill('_');
    this.intentosRestantes = 6; // 
  }

  proponerLetra(letra: string): void {
    if (this.intentosRestantes > 0 && this.palabraSecreta.includes(letra)) {
      for (let i = 0; i < this.palabraSecreta.length; i++) {
        if (this.palabraSecreta[i] === letra) {
          this.letrasAdivinadas[i] = letra;
        }
      }
    } else {
      this.intentosRestantes--;
    }

    this.verificarEstadoJuego();
  }

  verificarEstadoJuego(): void {
    if (!this.letrasAdivinadas.includes('_')) {
      alert('¡Ganaste!');
      this.iniciarJuego();
    } else if (this.intentosRestantes === 0) {
      alert('¡Perdiste! La palabra era: ' + this.palabraSecreta);
      this.iniciarJuego();
    }
  }
}