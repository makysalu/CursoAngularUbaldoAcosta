import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'SolucionCalculadora';
  resultado: number = 0;

  sacarResultado(resultado: number): void{
    this.resultado = resultado
  }
}
