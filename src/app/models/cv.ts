export class Cv {
    id : number;
    link: string;
    anio_derechos: string;
    nombre: string;

    constructor (link: string, anio_derechos: string, nombre: string) {
        this.link = link;
        this.anio_derechos = anio_derechos;
        this.nombre = nombre;
    }
}
