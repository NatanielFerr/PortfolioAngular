import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-apartado-experiencia',
  templateUrl: './apartado-experiencia.component.html',
  styleUrls: ['./apartado-experiencia.component.css']
})
export class ApartadoExperienciaComponent implements OnInit {

  experiencia: any;

  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info =>{
      // console.log(info);
    this.experiencia = info.experiencia;
    });
  }

}
