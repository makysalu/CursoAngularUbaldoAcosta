import { Component, OnInit} from '@angular/core';
import { Gasto } from './model/gasto.model';
import { Ingreso } from './model/ingreso.model';
import { GastoServices } from './services/gasto.service';
import { IngresoServices } from './services/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo: string = 'Presupuesto Disponible:';
  saldoTotal: number = 10000;
  ingresoTotal: number = 0;
  gastoTotal: number = 0;

  gastos: Gasto[] = [];
  ingresos: Ingreso[] = [];

  constructor(private gastoService: GastoServices, private ingresoService: IngresoServices ){}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
    
    this.gastos = this.gastoService.gastos;
    
    this.gastos.forEach(gasto => {
      this.gastoTotal += gasto.valor; 
    });

    this.ingresos.forEach(ingreso => {
      this.ingresoTotal += ingreso.valor; 
    });

    this.saldoTotal = this.ingresoTotal - this.gastoTotal;
  }

  calculoTotales():void{
    this.ingresoTotal = 0;
    this.gastoTotal = 0;

    this.gastos.forEach(gasto => {
      this.gastoTotal += gasto.valor; 
    });

    this.ingresos.forEach(ingreso => {
      this.ingresoTotal += ingreso.valor; 
    });

    this.saldoTotal = this.ingresoTotal - this.gastoTotal;
  }

}
