import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-apartado-proyectos',
  templateUrl: './apartado-proyectos.component.html',
  styleUrls: ['./apartado-proyectos.component.css']
})
export class ApartadoProyectosComponent implements OnInit {

  proyectos: any;

  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info =>{
      console.log(info);
    this.proyectos = info.proyectos;
    });
  }

}
