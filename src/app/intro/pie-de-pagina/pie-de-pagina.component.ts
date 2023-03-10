import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv';
import { Persona } from 'src/app/models/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { CvService } from 'src/app/servicios/cv.service';
import { InfoService } from 'src/app/servicios/info.service';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {
  cvs: Cv[]=[];
  personas : Persona[]=[];
  Listacvs: any;
// botondescarga: any;
// nombre : string = '';
// apellido : string = '';

  constructor(private authService: AuthService, private sCv:CvService, private sPersona:PersonaService) { }

  ngOnInit(): void {
    this.cargarCv();
    this.cargarPersona();
    // this.infoService.getInformacion().subscribe(info =>{
    //   // console.log(info);
    //   this.nombre = info.nombre;
    //   this.apellido = info.apellido;
    //   this.botondescarga = info.botondescarga;
    // });
  }

  cargarCv():void {
    this.sCv.lista().subscribe(data =>{
      console.log(data);
      this.cvs = data;
    });
  }

  cargarPersona():void {
    this.sPersona.verpersonas().subscribe(data =>{
      this.personas = data;
      console.log(data);
    });
  }

}
