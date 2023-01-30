import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidades-add',
  templateUrl: './modal-habilidades-add.component.html',
  styleUrls: ['./modal-habilidades-add.component.css']
})
export class ModalHabilidadesAddComponent implements OnInit {
  form: FormGroup;
  nombre: '';
  habilidades: Habilidad[]=[];
  logo: any;
  porcentaje: any;
  personaid: number = 1 ;

  constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService, 
    private activatedRoute:ActivatedRoute,private router:Router) {
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
    // this.info();
    // this.cargarHabilidad();
  }

  cargarHabilidad():void {
    this.sHabilidad.lista().subscribe(data =>{
      this.habilidades = data;
    });
  }

  // info():void{
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   this.sHabilidad.detail(id).subscribe(data => {
  //     this.habi=data;
  //   },err =>{
  //     alert("Error al cargar datos");
  //     this.router.navigate(['']);
  //   });
  // }

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

// onCreate(event: Event){
//   event.preventDefault();
//    if (this.form.valid){
//     this.isupdated=true;
//     this.sHabilidad.save(JSON.stringify(this.form.value),"habilidad/create").subscribe(data => {});
//     return "Exito";
//    }
// }


onCreate():void{
  let habilidad = this.form.value;

  if (habilidad.id == '') {
    this.sHabilidad.save(habilidad).subscribe(
       error =>{
        alert("Falló al agregar la habilidad, intente nuevamente");
        this.form.reset();
        window.location.reload();
      },
      data => {
        alert("Su nueva habilidad fue añadida correctamente");
        this.form.reset();
        window.location.reload();
      })
}
}

  // onCreate(): void{
  // const hab = new Habilidad(this.nombre, this.porcentaje, this.porcentaje_titulo, this.logo);
  // this.sHabilidad.save(hab).subscribe(
  //   error =>{
  //   alert("Falló en la carga, intente de nuevo");
  //   window.location.reload();
  // },data => {
  //   alert("Habilidad Añadida");
  //   this.form.reset();
  // });
  // }

limpiar():void{
  this.form.reset();
}

onEnviar(event:Event){
  event.preventDefault;
  if (this.form.valid){
    this.onCreate();
  }else{
    alert("falló en la carga de la habilidad, intente nuevamente");
    this.form.markAllAsTouched();
  }
}

}
