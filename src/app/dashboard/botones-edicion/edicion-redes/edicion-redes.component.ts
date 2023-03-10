import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-edicion-redes',
  templateUrl: './edicion-redes.component.html',
  styleUrls: ['./edicion-redes.component.css']
})
export class EdicionRedesComponent implements OnInit {
  modoEdicion: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
  }

}
