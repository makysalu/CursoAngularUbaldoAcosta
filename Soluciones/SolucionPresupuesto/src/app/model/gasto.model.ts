export class Gasto{
    descripcion: string = '';
    valor: number = 0;

    constructor(descripcion:string, valor:number)
    {
        this.descripcion = descripcion;
        this.valor = valor;
    }
}