import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() resultado = new EventEmitter<number>();
  operandoA: number = 0;
  operandoB: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  sumar():void{
    this.resultado.emit(this.operandoA + this.operandoB);
  }
}
