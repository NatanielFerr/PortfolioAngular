import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-apartado-acercademi',
  templateUrl: './apartado-acercademi.component.html',
  styleUrls: ['./apartado-acercademi.component.css']
})
export class ApartadoAcercademiComponent implements OnInit {

  nombre : string = '';
  apellido : string = '';
  sobremi : string = '';
  titulo : string = '';
  imgperfil: any = '';

  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info =>{
      console.log(info);
      this.nombre = info.nombre;
      this.apellido = info.apellido;
      this.sobremi = info.sobremi;
      this.titulo = info.titulo;
      this.imgperfil = info.img_perfil;
    });
  }

}