import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
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