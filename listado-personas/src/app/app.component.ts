import { Component, OnInit } from '@angular/core';
import * as firebase from '@firebase/app';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  titulo: string = 'Listado Personas';
  
  
  constructor(private loginservice: LoginService){}
  
  ngOnInit():void{
  }

  isAutenticado(): boolean{
    return this.loginservice.getAutenticado();
  }

  logout():void{
    this.loginservice.logout();
  }
}
