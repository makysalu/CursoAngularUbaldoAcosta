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
  gastos: Gasto[] = [];
  ingresos: Ingreso[] = [];

  constructor(private gastoService: GastoServices, private ingresoService: IngresoServices ){}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
    
    this.gastos = this.gastoService.gastos;
  }

  getIngresoTotal():number{
    let ingresoTotal :number = 0;
    
    this.ingresos.forEach(ingreso => {
      
      ingresoTotal += ingreso.valor; 
    });

    return ingresoTotal;
  }

  getGastoTotal(): number{
    let gastoTotal :number = 0;

    this.gastos.forEach(gasto => {
      gastoTotal += gasto.valor; 
    });

    
    return gastoTotal;
  }

  getPorcentajeTotal(): number{
    return this.getGastoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal() :number{
    return this.getIngresoTotal() - this.getGastoTotal();
  }

}
