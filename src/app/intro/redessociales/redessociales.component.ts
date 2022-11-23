import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redessociales.component.html',
  styleUrls: ['./redessociales.component.css']
})
export class RedessocialesComponent implements OnInit {
redes: any;
  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info =>{
      console.log(info);
    this.redes = info.redes;
    });
  }

}
