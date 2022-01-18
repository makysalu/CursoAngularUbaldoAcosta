import { Injectable } from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore'
import { Observable } from "rxjs";
import { Cliente } from "../modelos/cliente.model";
import {map} from 'rxjs/operators'

@Injectable()
export class ClienteService{
    clientesColeccion: AngularFirestoreCollection<Cliente>;
    clienteDoc: AngularFirestoreDocument<Cliente>;
    clientes: Observable<Cliente[]>;
    cliente: Observable<Cliente>;

    constructor(
        private db: AngularFirestore
    ){
        this.clientesColeccion =db.collection('clientes', ref => ref.orderBy('nombre', 'asc'))
    }

    getClientes():Observable<Cliente[]>{
        this.clientes = this.clientesColeccion.snapshotChanges().pipe(
            map(cambios => {
                return cambios.map(accion=>{
                    const datos = accion.payload.doc.data() as Cliente;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.clientes;
    }

    getCliente(id: string){
        this.clienteDoc = this.db.doc<Cliente>(`clientes/${id}`);
        this.cliente = this.clienteDoc.snapshotChanges().pipe(
            map( accion => {
                if(accion.payload.exists === false){
                    return null;
                }else{
                    const datos = accion.payload.data() as Cliente;
                    datos.id = accion.payload.id;
                    return datos as any;
                }
            })
       )
        return this.cliente;
    }

    insertCliente(cliente: Cliente):void{
        this.clientesColeccion.add(cliente);
    }

    updateCliente(cliente: Cliente):void{
        this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
        this.clienteDoc.update(cliente);
    }

    deleteCliente(cliente: Cliente):void{
        this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
        this.clienteDoc.delete();
    }
}