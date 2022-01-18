import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../model/ingreso.model';

@Component({
  selector: 'app-listado-ingresos',
  templateUrl: './listado-ingresos.component.html',
  styleUrls: ['./listado-ingresos.component.css']
})
export class ListadoIngresosComponent implements OnInit {
  @Input() ingresos: Ingreso[] = [] 
  
  constructor() { }

  ngOnInit(): void {
  }

}
