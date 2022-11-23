import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-apartado-habilidades',
  templateUrl: './apartado-habilidades.component.html',
  styleUrls: ['./apartado-habilidades.component.css']
})
export class ApartadoHabilidadesComponent implements OnInit {
habilidades: any;

  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info =>{
      console.log(info);
    this.habilidades = info.habilidades;
    });
  }

}
