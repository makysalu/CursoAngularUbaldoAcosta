import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto.model';

@Component({
  selector: 'app-listado-gastos',
  templateUrl: './listado-gastos.component.html',
  styleUrls: ['./listado-gastos.component.css']
})
export class ListadoGastosComponent implements OnInit {
  @Input() gastos: Gasto[] = [];
  @Input() gastoTotal: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
