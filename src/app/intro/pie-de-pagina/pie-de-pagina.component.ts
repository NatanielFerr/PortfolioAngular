import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {

botondescarga: any;
nombre : string = '';
apellido : string = '';

  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info =>{
      // console.log(info);
      this.nombre = info.nombre;
      this.apellido = info.apellido;
      this.botondescarga = info.botondescarga;
    });
  }

}
