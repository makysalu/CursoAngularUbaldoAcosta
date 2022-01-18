import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto.model';
import { Ingreso } from '../model/ingreso.model';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.css']
})
export class ListadoComponentComponent implements OnInit {
  @Input() gastos: Gasto[] = [];
  @Input() gastoTotal: number = 0;

  @Input() ingresos: Ingreso[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
