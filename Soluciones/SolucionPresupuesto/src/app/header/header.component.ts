import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() presupuestoTotal: number = 0;
  @Input() ingresoTotal: number = 0;
  @Input() gastoTotal:number = 0;
  @Input() porcentageTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
