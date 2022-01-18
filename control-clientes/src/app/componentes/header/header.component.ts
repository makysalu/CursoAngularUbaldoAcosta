import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelos/configuracion.model';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  permitirRegistro:boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionService: ConfiguracionService,
  ) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth =>{
      if(auth){
        if(auth.email != null)
        {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        }
      }
      else{
        this.isLoggedIn = false;
      }
    })

    this.configuracionService.getConfiguracion().subscribe(
      (configuracion: Configuracion) =>{
        if(configuracion.permitirRegistro)  this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }

  logout():void{
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
