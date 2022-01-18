import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() calculoTotales = new EventEmitter<any>();

  tipoIngreso: number = 1;
  descripcion: string = "";
  valor: number = 0;
  
  
  constructor(private ingresoService: IngresoServices, private gastoService: GastoServices) { }
  
  ngOnInit(): void {
  
  }

  agregarInporte():void{
    if(this.tipoIngreso == 1)
    {
      this.ingresoService.agregarIngreso(new Ingreso(this.descripcion, this.valor));
    }
    else if(this.tipoIngreso == 2)
    {
      this.gastoService.agregarGasto(new Gasto(this.descripcion, this.valor));
    }

    this.calculoTotales.emit();
  }
}
