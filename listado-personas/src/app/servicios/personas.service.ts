import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from '../modelos/persona.modelo';
import { DataService } from './dataService';

@Injectable()
export class PersonasServices{
    personas: Persona[] = [];

    saludar = new EventEmitter<number>();
    constructor(private loggingService: LoggingService, private dataService: DataService){}
    
    setPersonas(personas: Persona[]){
        this.personas=personas
    }

    cargarPersonas(){
        return this.dataService.cargarPersonas();
    }

    agregarPersona(persona: Persona):void{
        this.loggingService.enviaMensajeAConsola("Se agrego ha: "+persona.nombre+" "+persona.apellido)
        if(this.personas==null){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    }

    sacarPersona(index: number):Persona{
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona):void
    {
        if ( index != -1 ) {
            this.personas[index] = persona;
            this.dataService.modificarPersona(index, persona);
        }
    }

    eliminarPersona(index:number):void{
        if ( index != -1 ) {
            this.personas.splice( index, 1 );
            this.dataService.deletePersona(index);
            this.dataService.guardarPersonas(this.personas);
        }
    }
}