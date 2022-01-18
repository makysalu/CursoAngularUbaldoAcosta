import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-calculadora',
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.css']
})
export class FormCalculadoraComponent implements OnInit{

  @Output() resultado = new EventEmitter<number>();
  operadorA: number = 0;
  operadorB: number = 0;


  constructor() { }

  ngOnInit(): void{
  }

  funcionSuma(): void {
    let total = this.operadorA + this.operadorB;
    this.resultado.emit(total);
  }
}
