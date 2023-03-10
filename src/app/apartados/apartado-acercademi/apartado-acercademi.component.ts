import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-apartado-acercademi',
  templateUrl: './apartado-acercademi.component.html',
  styleUrls: ['./apartado-acercademi.component.css']
})
export class ApartadoAcercademiComponent implements OnInit {
  modoEdicion: any;
  // nombre : string = '';
  // apellido : string = '';
  // sobremi : string = '';
  // titulo : string = '';
  // imgperfil: any = '';
  personas : Persona[]=[];

  constructor(private authService: AuthService, private sPersona:PersonaService) { }

  ngOnInit(): void {
    // this.infoService.getInformacion().subscribe(info =>{
      
    //   this.nombre = info.nombre;
    //   this.apellido = info.apellido;
    //   this.sobremi = info.sobremi;
    //   this.titulo = info.titulo;
    //   this.imgperfil = info.img_perfil;
    // });
    this.cargarPersona();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
  }

  cargarPersona():void {
    this.sPersona.verpersonas().subscribe(data =>{
      this.personas = data;
      console.log(data);
    });
  }

}