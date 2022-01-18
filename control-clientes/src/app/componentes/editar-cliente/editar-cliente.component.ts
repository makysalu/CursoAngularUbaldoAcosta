import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/clientes.service';
import {FlashMessagesService} from "angular2-flash-messages";
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre:'',
    apellido:'',
    email:'',
    saldo:0
  }

  id:string = "";

  @ViewChild("clienteForm") clienteForm: NgForm;

  constructor(
    private clientesService: ClienteService, 
    private flashMessages: FlashMessagesService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesService.getCliente(this.id).subscribe(
      cliente => {
        this.cliente = cliente;
      }
    )
  }

  modificarCliente(f:NgForm):void{
    if(!f.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente',{
        cssClass:'alert-danger', timeout: 4000
      });
    }
    else{
      f.value.id = this.id;
      this.clientesService.updateCliente(f.value);
      this.router.navigate(['/']);
    }
  }

  eliminarCliente():void{
    if(confirm('Seguro que deseas eliminar el cliente?')){
      this.clientesService.deleteCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }
}
