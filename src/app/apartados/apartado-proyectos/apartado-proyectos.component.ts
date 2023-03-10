import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { AuthService } from 'src/app/servicios/auth.service';
import { InfoService } from 'src/app/servicios/info.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-apartado-proyectos',
  templateUrl: './apartado-proyectos.component.html',
  styleUrls: ['./apartado-proyectos.component.css']
})
export class ApartadoProyectosComponent implements OnInit {

  proyectos: Proyecto[]=[];
  modoEdicion: any;
  isTrue: boolean = false;
  idEditar: number = 0;

  constructor(private infoService:InfoService, private authService: AuthService, private sProye:ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyecto();
    this.infoService.getInformacion().subscribe(info =>{
    // console.log(info);
    // this.habilidad = info.habilidad;
    
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
  
  });

}

  cargarProyecto():void {
    this.sProye.lista().subscribe(data =>{
    this.proyectos=data;
    });
  }

  idEdit(id:number){
    this.isTrue = true;
    this.idEditar = id;
  }

  delete(id: number) {
    this.sProye.delete(id).subscribe(
      error => {
        alert("Falló al eliminar el proyecto, intente nuevamente");
        this.cargarProyecto();
      },
      data => {
        alert("El proyecto fue eliminado correctamente");
        this.cargarProyecto();
      }
    )}


}