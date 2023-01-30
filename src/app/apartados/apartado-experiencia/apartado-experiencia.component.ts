import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { AuthService } from 'src/app/servicios/auth.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { InfoService } from 'src/app/servicios/info.service';


@Component({
  selector: 'app-apartado-experiencia',
  templateUrl: './apartado-experiencia.component.html',
  styleUrls: ['./apartado-experiencia.component.css']
})
export class ApartadoExperienciaComponent implements OnInit {

  modoEdicion: any;
  isTrue: boolean = false;
  idEditar: number = 0;
  experiencias: Experiencia[]=[];
  Listaexperiencias: any;
  isLogged: boolean = false;

  constructor(private authService: AuthService, private sExperiencia: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
  //   this.infoService.getInformacion().subscribe(info =>{
  //     // console.log(info);
  //   this.experiencia = info.experiencia;
    
  //   if (sessionStorage.getItem('currentUser') == "null"){
  //     this.modoEdicion = false;
  //   } else if (sessionStorage.getItem('currentUser') == null){
  //     this.modoEdicion = false;
  //   } else{
  //     this.modoEdicion = true;
  //   }
  
  // });
  }

  cargarExperiencia():void {
    this.sExperiencia.lista().subscribe(data =>{
      console.log(data);
      this.experiencias = data;
    });
  }

  idEdit(id:number){
    this.isTrue = true;
    this.idEditar = id;
    var elem = document.getElementById('nombre');
    

    elem?.setAttribute("value", this.Listaexperiencias[id].id);

  }

  delete(id:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, err =>{
          alert("no se pudo eliminar la experiencia")
        })
    }}

}
