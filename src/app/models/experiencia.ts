export class Experiencia {
    id : number;
    nombre : string;
    cargo : string;
    inicio : string;
    fin : string;
    descripcion_cargo : string;
    logo : string;
    link : string;
    actual : boolean;

    constructor(cargo : string,inicio : string,fin : string,descripcion_cargo : string,
    logo : string,link : string,actual : boolean, nombre : string){
        this.cargo = cargo;
        this.nombre = nombre;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion_cargo = descripcion_cargo;
        this.logo = logo;
        this.link = link;
        this.actual = actual;
    }
}
