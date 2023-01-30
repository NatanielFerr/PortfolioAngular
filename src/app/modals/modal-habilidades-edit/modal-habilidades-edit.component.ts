import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import {ApartadoHabilidadesComponent} from 'src/app/apartados/apartado-habilidades/apartado-habilidades.component'

@Component({
  selector: 'app-modal-habilidades-edit',
  templateUrl: './modal-habilidades-edit.component.html',
  styleUrls: ['./modal-habilidades-edit.component.css']
})
export class ModalHabilidadesEditComponent implements OnInit{
  form: FormGroup;
  habi = new Habilidad("","",0,1);
  habilidades: Habilidad[] = [];
  nombre: '';
  logo: any;
  porcentaje: any;
  personaid: number = 1 ;
  id?:number;
  constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService,
    private activatedRoute:ActivatedRoute , private router: Router) {
      this.form = this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]],
      porcentaje_titulo:[''],
      logo:[''],
      personaid:['']
    }) 
  }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params['id'];
    // this.sHabilidad.detail(id).subscribe(
    //   data => {
    //     this.habi = data;
    //     alert()
    //   }, error => {
    //     alert("Error al cargar la habilidad");
    //   }
    // )
    
    // this.detail();


    // this.id = this.activatedRoute.snapshot.params['id'];
    // this.habi = new Habilidad("","","",0,1);
    // this.sHabilidad.detail(this.id).subscribe(data => {
    //   this.habi = data;
    // });

    // this.id = this.insert.idEditar;
    // this.sHabilidad.detail(this.id).subscribe(data =>
    //   {
    //     this.habi = data;
    //     console.log(this.habi)
    //   },
    //   err =>{
    //   alert("Error al llamar los datos de proyectos");
    // });
    // this.info();
    // this.detail();
  }
  

  get Nombre(){
    return this.form.get("nombre");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get NombreValid(){
    return this.Nombre?.touched && !this.Nombre.valid;
  }

  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid;
  }

  get Logo(){
    return this.form.get("logo");
  }

  get Personaid(){
    return this.form.get("personaid");
  }


  onUpdate():void{
    let habi = this.form.value;
      this.sHabilidad.update(habi.id, habi).subscribe(
        data => {
          alert('Habilidad editada correctamente');
          window.location.reload();
          this.form.reset();
        },
        error => {
          alert('Falló al editar la habilidad, intente nuevamente');
          window.location.reload();
          this.form.reset();
        })
    }

    cargarHabilidad():void {
      this.sHabilidad.lista().subscribe(data =>{
        this.habilidades = data;
        console.log(data);
      });
    }

    onLoadModal(item:any){
      this.form.get("logo")?.setValue(item.logo);
      this.form.get("porcentaje_titulo")?.setValue(item.porcentaje_titulo);
      this.form.get("porcentaje")?.setValue(item.porcentaje);
      this.form.get("nombre")?.setValue(item.nombre);
      this.form.get("id")?.setValue(item.id);
    }

    detail(id:number){
      this.sHabilidad.detail(id).subscribe(data =>{
        this.form.setValue(data);
        console.log(data);
      })
    }

   

  // onUpdate():void{
  //   this.sHabilidad.update(this.habi.id, this.habi).subscribe(data =>{
  //     alert("Habilidad modificada")
  //     window.location.reload();
  //   }, err =>{
  //     alert("falló al modificar, intente nuevamente");
  //     window.location.reload();
  //   }
  //   )}

  // onUpdate():void{
  // const id = this.activatedRouter.snapshot.params['id'];
  // this.sHabilidad.update(id, this.habi).subscribe( 
  //   data => {
  //     this.router.navigate(['']);
  //   },error => {
  //     alert("Error al modificar la habilidad");
  //     window.location.reload();
  //     } 
  //   )
  // }

  // info():void{
  //   this.id = this.insert.idEditar;
  //   this.sHabilidad.detail(this.id).subscribe(data=>
  //   {this.habi = data},
  //   error => {
  //     alert("Error al llamar los datos de habilidad");
  //   });
  // }
    
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
