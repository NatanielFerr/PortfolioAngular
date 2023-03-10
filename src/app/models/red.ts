export class Red {
    id : number;
    nombre: string;
    logo: string;
    link: string;
    denominacion: string;

    constructor (nombre: string, logo: string, link: string, denominacion: string) {
        this.nombre = nombre;
        this.logo = logo;
        this.link = link;
        this.denominacion = denominacion;
    }
}
