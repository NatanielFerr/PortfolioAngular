import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  educaciones: Educacion[]=[];
  Listaeducaciones: any;

  //Modal educaciones edit//
  form: FormGroup;
  educ = new Educacion("","","","","","","",1);
  nivel: string;
  institucion: string;
  img : string;
  descripcion: string;
  link : string;
  inicio:Date;
  fin:Date;
  personaid: number = 1;


  constructor(private authService: AuthService, private sEducacion:EducacionService, 
    private formBuilder: FormBuilder) {
      //Modal educaciones edit//
      this.form = this.formBuilder.group({
        id:[''],
        nivel: ['',[Validators.required]],
        institucion:[''],
        img:[''],
        descripcion:['',[Validators.required]],
        link:[''],
        inicio:['',[Validators.required]],
        fin:[''],
        personaid:['']
      })
     }

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

  //Modal educaciones edit//
  get Nivel(){
    return this.form.get("nivel");
  }
  
  get NivelInvalid(){
    return this.Nivel?.touched && !this.Nivel.valid;
  }
  
  get Institucion(){
    return this.form.get("institucion");
  }
  
  get Inicio(){
    return this.form.get("inicio");
  }
  
  get InicioInvalid(){
    return this.Inicio?.touched && !this.Inicio.valid;
  }
  
  get Fin(){
    return this.form.get("fin");
  }
  
  get Descripcion(){
    return this.form.get("descripcion_cargo");
  }
  
  get DescripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion.valid;
  }
  
  get Img(){
    return this.form.get("img");
  }
  
  get Link(){
    return this.form.get("link");
  }
  
  get Personaid(){
    return this.form.get("personaid");
  }

  onUpdate():void{
    let educ = this.form.value;
      this.sEducacion.update(educ.id, educ).subscribe(
        data => {
          alert('Educacion editada correctamente');
          window.location.reload();
          this.form.reset();
        })
    }

    detail(id:number){
      this.sEducacion.detail(id).subscribe(data =>{
        this.form.setValue(data);
        console.log(data);
      })
    }

    onEnviar(event:Event){
      event.preventDefault;
      if (this.form.valid){
        this.onUpdate();
      }else{
        alert("Falló al editar la educación, intente nuevamente");
        this.form.markAllAsTouched();
      }
    }

    cerrar():void{
      window.location.reload();
    }

    limpiar():void{
      this.form.reset();
    }

  delete(id: number) {
      this.sEducacion.delete(id).subscribe(
        error => {
          alert("Falló al eliminar la educación, intente nuevamente");
          this.cargarEducacion();
        },
        data => {
          alert("La educación fue eliminada correctamente");
          this.cargarEducacion();
        }
      )}

}
