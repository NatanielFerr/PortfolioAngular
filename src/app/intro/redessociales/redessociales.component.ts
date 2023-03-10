import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/models/red';
import { AuthService } from 'src/app/servicios/auth.service';
import { InfoService } from 'src/app/servicios/info.service';
import { RedService } from 'src/app/servicios/red.service';


@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redessociales.component.html',
  styleUrls: ['./redessociales.component.css']
})
export class RedessocialesComponent implements OnInit {
redes: Red[]=[];
  constructor(private authService: AuthService, private sRed:RedService) { }

  ngOnInit(): void {
    // this.infoService.getInformacion().subscribe(info =>{
    //   console.log(info);
    // this.redes = info.redes;
    // });
    this.cargarRed();
  }

  cargarRed():void {
    this.sRed.lista().subscribe(data =>{
      console.log(data);
      this.redes = data;
    });
  }

}
