import { Gasto } from "../model/gasto.model";

export class GastoServices{
    gastos: Gasto[] = [
        new Gasto('comida', 200), 
        new Gasto('piso', 150), 
        new Gasto('gastos', 50)
    ];

    constructor(){}
    
    agregar(gasto: Gasto){
        this.gastos.push(gasto);
    }

    eliminar(indice: number){
        if ( indice !== -1 ) {
            this.gastos.splice( indice, 1 );
        }
    }
}