import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-apartado-educacion',
  templateUrl: './apartado-educacion.component.html',
  styleUrls: ['./apartado-educacion.component.css']
})
export class ApartadoEducacionComponent implements OnInit {

  educacion: any;

  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info =>{
      console.log(info);
    this.educacion = info.educacion;
    });
  }

}
