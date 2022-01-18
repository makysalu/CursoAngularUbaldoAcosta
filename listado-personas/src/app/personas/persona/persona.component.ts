import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../modelos/persona.modelo';
import { PersonasServices } from '../../servicios/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona = new Persona("", "");
  @Input() i: number = 0;

  constructor(private personasServices: PersonasServices) { }

  ngOnInit(): void {
  }

  emitirSaludo():void{
    this.personasServices.saludar.emit(this.i);
  }

}
