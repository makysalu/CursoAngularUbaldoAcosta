import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto.model';
import { Ingreso } from '../model/ingreso.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() ingresos: Ingreso[] = [];
  @Input() gastos: Gasto[] = [];
  @Input() ingresoTotal: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
