import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona.modelo';
import { LoginService } from './login.service';

@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient, private loginService: LoginService){}
    
    cargarPersonas(){
        let token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-1da72-default-rtdb.firebaseio.com/datos.json?auth='+ token);
    }

    guardarPersonas(personas: Persona[]):void{
        let token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-1da72-default-rtdb.firebaseio.com/datos.json?auth='+ token, personas)
        .subscribe(
            response=> console.log("Resultado de guardar Personas: "+response),
            error => console.log("Error al guardar personas: "+error)
        );
    }

    modificarPersona(index: number, persona: Persona):void{
        let token = this.loginService.getIdToken();
        let url: string ='https://listado-personas-1da72-default-rtdb.firebaseio.com/datos/' + index + '.json?auth='+ token;
        this.httpClient.put(url, persona)
        .subscribe(
            response=> console.log("Resultado de modificar Personas: "+response),
            error => console.log("Error al modificar personas: "+error)
        );
    }

    deletePersona(index: number):void{
        let token = this.loginService.getIdToken();
        let url: string ='https://listado-personas-1da72-default-rtdb.firebaseio.com/datos/' + index + '.json?auth='+ token;
        this.httpClient.delete(url)
        .subscribe(
            response=> console.log("Resultado de eliminar Personas: "+response),
            error => console.log("Error al eliminar personas: "+error)
        );
    }

    
}