import { Component, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto.model';
import { Ingreso } from '../model/ingreso.model';
import { GastoServices } from '../services/gasto.service';
import { IngresoServices } from '../services/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = "ing";
  valor: number = 0;
  descripcion: string = "";

  constructor(private ingresoService: IngresoServices, private gastoService: GastoServices) { }

  ngOnInit(): void {
  }
  
  tipoOperacion(event: any):void{
    this.tipo = event.target.value
  }

  agregarValor():void{
    if(this.valor!=0){
      if(this.tipo == "ing"){
        let newIngreso = new Ingreso(this.descripcion, this.valor);
        this.ingresoService.agregar(newIngreso);
      } 
      else if(this.tipo =="gas"){
        let newGasto = new Gasto(this.descripcion, this.valor);
        this.gastoService.agregar(newGasto);
      }
    }
  }
}
