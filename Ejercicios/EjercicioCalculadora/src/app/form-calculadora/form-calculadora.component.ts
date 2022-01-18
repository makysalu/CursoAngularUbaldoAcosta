import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-calculadora',
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.css']
})
export class FormCalculadoraComponent implements OnInit{

  operadorA: number = 0;
  operadorB: number = 0;
  total: number = 0;

  constructor() { }

  ngOnInit() {
  }

  funcionSuma(): void {
    this.total = this.operadorA + this.operadorB;
  }


}
