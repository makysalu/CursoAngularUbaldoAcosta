import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelos/configuracion.model';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  
  permitirRegistro:boolean = false;
  constructor(
    private router: Router,
    private configuracionService: ConfiguracionService
  ) { }

  ngOnInit(): void {
    this.configuracionService.getConfiguracion().subscribe(
      (configuracion: Configuracion) =>{
        if(configuracion.permitirRegistro)  this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }

  guardar(){
    let configuracion = {permitirRegistro: this.permitirRegistro};
    this.configuracionService.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }
}
