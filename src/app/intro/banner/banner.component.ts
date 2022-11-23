import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

imgbanner : any = '';
bienvenida : any = '';

  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infoService.getInformacion().subscribe(info =>{
      console.log(info);
      this.imgbanner = info.imgbanner;
      this.bienvenida = info;
    });
  }

}
