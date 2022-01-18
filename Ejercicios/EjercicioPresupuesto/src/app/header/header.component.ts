import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titulo = "";
  @Input() saldoTotal = 0;
  @Input() ingresoTotal = 0;
  @Input() gastoTotal = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
