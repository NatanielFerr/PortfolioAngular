import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyectos-add',
  templateUrl: './modal-proyectos-add.component.html',
  styleUrls: ['./modal-proyectos-add.component.css']
})
export class ModalProyectosAddComponent implements OnInit {
  form: FormGroup;
  proyecto: string = '';
  inicio: string = '';
  fin: string = '';
  descripcion: string = '';
  tecnologia: string = '';
  imagen: string = '';
  link: string = '';


  constructor(private formBuilder:FormBuilder, private sproye: ProyectoService) { 
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
  }

  onCreate(): void{
    const proye = new Proyecto(this.proyecto, this.descripcion, 
      this.inicio, this.fin, this.imagen, this.link, this.tecnologia);
    this.sproye.save(proye).subscribe(data =>{
      alert("Proyecto Añadido");
      window.location.reload();
    }, err =>{
      alert("Falló en la carga, intente de nuevo");
      this.form.reset();
    });
    }
    
    limpiar():void{
      this.form.reset();
    }

}
