import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { AuthService } from 'src/app/servicios/auth.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-apartado-educacion',
  templateUrl: './apartado-educacion.component.html',
  styleUrls: ['./apartado-educacion.component.css']
})
export class ApartadoEducacionComponent implements OnInit {

  modoEdicion: any;
  isTrue: boolean = false;
  idEditar: number = 0;
  educaciones: Educacion[]=[];
  Listaeducaciones: any;
  isLogged: boolean = false;


  constructor(private authService: AuthService, private sEducacion: EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();

    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
    // this.infoService.getInformacion().subscribe(info =>{
    //   console.log(info);
    // this.educacion = info.educacion;
    // });
  }

  cargarEducacion():void {
    this.sEducacion.lista().subscribe(data =>{
      console.log(data);
      this.educaciones = data;
    });
  }

  idEdit(id:number){
    this.isTrue = true;
    this.idEditar = id;
    var elem = document.getElementById('nombre');
    

    elem?.setAttribute("value", this.Listaeducaciones[id].id);

  }

  delete(id:number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("no se pudo eliminar la educacion")
        })
    }}

}
