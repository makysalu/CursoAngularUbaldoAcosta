import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  deshabilitar: boolean = false;
  mensaje: string = 'No se ha agregado ninguna Persona';
  titulo: string = '';
  mostrar: boolean = false;

  agregarPersona(): void{
    this.mostrar = true;
    this.mensaje = 'Se ha agregado una persona';
  }
}
