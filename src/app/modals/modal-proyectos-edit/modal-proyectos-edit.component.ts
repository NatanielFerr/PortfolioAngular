import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyectos-edit',
  templateUrl: './modal-proyectos-edit.component.html',
  styleUrls: ['./modal-proyectos-edit.component.css']
})
export class ModalProyectosEditComponent implements OnInit {
  form:FormGroup;
  id: number = 0;
  proye!: Proyecto;
  proyecto: string = '';
  inicio: string = '';
  fin: string = '';
  descripcion: string = '';
  tecnologia: string = '';
  imagen: string = '';
  link: string = '';

  constructor(private formBuilder: FormBuilder, private sproye: ProyectoService, 
  private actidatedRoute: ActivatedRoute, private router: Router) {
    this.form = this.formBuilder.group({
      proyecto:['', [Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['', [Validators.required]],
      tecnologia:[''],
      imagen:[''],
      link:['']
    })
   }
   
  get Proyecto(){
    return this.form.get("proyecto");
  }
  
  get Inicio(){
    return this.form.get("inicio");
  }

  get Fin(){
    return this.form.get("fin");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }

  get Tecnologia(){
    return this.form.get("tecnologia");
  }

  get Imagen(){
    return this.form.get("imagen");
  }

  get Link(){
    return this.form.get("link");
  }
  
  get ProyectoValid(){
    return this.Proyecto?.touched && !this.Proyecto.valid;
  }

  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion.valid;
  }


  ngOnInit(): void {
    // this.id = this.insert.idEditar;
    // this.sproye.detail(this.id).subscribe(data =>
    //   {
    //     this.proye = data;
    //     console.log(this.proye)
    //   },
    //   err =>{
    //   alert("Error al llamar los datos de proyectos");
    // });
  }

  onUpdate():void{
    this.sproye.update(this.proye.id, this.proye).subscribe(data =>{
      alert("Habilidad modificada")
      window.location.reload();
    }, err =>{
      alert("falló al modificar, intente nuevamente");
      window.location.reload();
    }
    )}

    onEnviar(event:Event){
      event.preventDefault;
      if (this.form.valid){
        this.onUpdate();
      }else{
        alert("falló en la carga, intente nuevamente");
        this.form.markAllAsTouched();
      }
    }

    cerrar():void{
      window.location.reload();
    }

    limpiar():void{
      this.form.reset();
    }
}
