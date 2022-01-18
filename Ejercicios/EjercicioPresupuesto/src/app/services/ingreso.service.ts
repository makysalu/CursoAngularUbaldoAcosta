import { Ingreso } from "../model/ingreso.model";

export class IngresoServices{
    ingresoTotal = 0;

    ingresos: Ingreso[] = [
        new Ingreso('loteria', 20000), 
        new Ingreso('salario', 1050), 
        new Ingreso('pago', 50)
    ];

    constructor(){}
    
    agregarIngreso(ingreso: Ingreso){
        this.ingresoTotal += ingreso.valor;
        this.ingresos.push(ingreso);
    }
}