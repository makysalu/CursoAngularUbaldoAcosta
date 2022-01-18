import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../model/ingreso.model';
import { GastoServices } from '../services/gasto.service';
import { IngresoServices } from '../services/ingreso.service';

@Component({
  selector: 'app-listado-ingreso',
  templateUrl: './listado-ingreso.component.html',
  styleUrls: ['./listado-ingreso.component.css']
})
export class ListadoIngresoComponent implements OnInit {
  @Input() ingresos: Ingreso[] = [];
  
  constructor(private ingresoService: IngresoServices) { }

  ngOnInit(): void {
  }

  eliminarIngreso(indice: number):void{
    this.ingresoService.eliminar(indice);
  }

}
