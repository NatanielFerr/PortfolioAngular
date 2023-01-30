import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { InfoService } from 'src/app/servicios/info.service';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

// imgbanner : any = '';
// bienvenida : any = '';
personas : Persona[]=[];

  constructor(private authService: AuthService, private sPersona:PersonaService) { }

  ngOnInit(): void {
    // this.infoService.getInformacion().subscribe(info =>{
    //   console.log(info);
    //   this.imgbanner = info.imgbanner;
    //   this.bienvenida = info;
    // });
    this.cargarPersona();
  }

  cargarPersona():void {
    this.sPersona.verpersonas().subscribe(data =>{
      this.personas = data;
      console.log(data);
    });
  }

}
