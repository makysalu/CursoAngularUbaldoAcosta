import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/clientes.service';
import {FlashMessagesService} from "angular2-flash-messages";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes?: Cliente[];
  cliente: Cliente = {
    nombre:'',
    apellido:'',
    email:'',
    saldo:0
  }

  @ViewChild("clienteForm") clienteForm: NgForm;
  @ViewChild("botoncerrar") botonCerrar: ElementRef;

  constructor(
    private clientesService: ClienteService, 
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(
      clientes =>{
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal():number{
    let saldoTotal: number = 0;

    if(this.clientes){
      this.clientes.forEach(cliente => {
        if(cliente.saldo!=null)
        {
          saldoTotal += cliente.saldo;
        } 
      })
    }
    return saldoTotal;
  }

  agregarCliente(f:NgForm):void{
    if(!f.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente',{
        cssClass:'alert-danger', timeout: 4000
      });
    }
    else{
      this.clientesService.insertCliente(f.value);
      this.clienteForm.resetForm();
      this.cerrarModal();
    }
  }

  private cerrarModal():void{
    this.botonCerrar.nativeElement.click();
  }

}
