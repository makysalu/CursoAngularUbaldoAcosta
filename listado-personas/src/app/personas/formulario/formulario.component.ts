import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../../servicios/LoggingService.service';
import { PersonasServices } from '../../servicios/personas.service';
import { Persona } from '../../modelos/persona.modelo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number = 0;
  modoEdicion: number = 0;

  //@ViewChild('nombreInput') nombreInput: ElementRef = new ElementRef("");
  //@ViewChild('apellidoInput') apellidoInput: ElementRef = new ElementRef("");;

  constructor(private personasServices: PersonasServices, private router: Router, private route: ActivatedRoute) {
    this.personasServices.saludar.subscribe(
      (i:number) => alert("El indice es: "+ i)
    )  
  }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['id'];
    this.modoEdicion = parseInt(this.route.snapshot.queryParams['modoEdicion']);
    
    if(this.modoEdicion === 1 && this.modoEdicion != null)
    {
      let persona: Persona = this.personasServices.sacarPersona(this.index);
      this.nombreInput= persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona():void{
    let newPersona: Persona = new Persona(this.nombreInput, this.apellidoInput);
    
    if(this.modoEdicion === 1 && this.modoEdicion != null){
      this.personasServices.modificarPersona(this.index, newPersona);
    }
    else{
      this.personasServices.agregarPersona(newPersona);
    }
    

    this.router.navigate(['personas'])
  }

  atras():void{
    this.router.navigate(['personas'])
  }

  eliminarPersona():void{
    if(this.index!=null)
    {
      this.personasServices.eliminarPersona(this.index);
    }

    this.router.navigate(['personas'])
  }
}
