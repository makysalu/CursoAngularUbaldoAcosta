import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto.model';
import { GastoServices } from '../services/gasto.service';

@Component({
  selector: 'app-listado-gasto',
  templateUrl: './listado-gasto.component.html',
  styleUrls: ['./listado-gasto.component.css']
})
export class ListadoGastoComponent implements OnInit {
  @Input() gastos: Gasto[] = [];
  @Input() ingresoTotal: number = 0;
  
  constructor(private gastoService: GastoServices) { }

  ngOnInit(): void {
  }

  eliminarGasto(indice:number):void{
    this.gastoService.eliminar(indice);
  }

  calcularPorcentaje(gasto: Gasto):number{
    return gasto.valor/this.ingresoTotal;
  }
}
