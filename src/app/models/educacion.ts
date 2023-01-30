export class Educacion {
    id : number;
    nivel: string;
    institucion: string;
    img : string;
    descripcion: string;
    link : string;
    inicio:Date;
    fin:Date;

    constructor (nivel : string, institucion : string, 
        img : string, descripcion : string, link : string,inicio : Date, fin : Date) {
        this.nivel = nivel;
        this.institucion =  institucion;
        this.img = img;
        this.descripcion = descripcion;
        this.link = link;
    }
}
