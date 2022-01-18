import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../modelos/persona.modelo';
import { PersonasServices } from '../servicios/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personasService: PersonasServices, private router:Router) { }

  ngOnInit(): void {
 
    this.personasService.cargarPersonas()
    .subscribe(
      (personas) => {
  
        let arraypersonas = Object.values(personas);
        arraypersonas.forEach(persona => {
          this.personas.push(new Persona(persona.nombre, persona.apellido));
        });

        this.personasService.setPersonas(this.personas);
      }
    )
  }

  agregar():void{
    this.router.navigate(['personas/agregar'])
  }

}
