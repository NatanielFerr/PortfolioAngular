import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cv } from 'src/app/models/cv';
import { Persona } from 'src/app/models/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { CvService } from 'src/app/servicios/cv.service';
import { InfoService } from 'src/app/servicios/info.service';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {
  cvs: Cv[]=[];
  personas : Persona[]=[];
  Listacvs: any;
// botondescarga: any;
// nombre : string = '';
// apellido : string = '';

//Modal información edit//
form: FormGroup;
cvv = new Cv("","","",1);
link: '';
nombre: '';
anio_derechos: '';
personaid: number = 1 ;


  constructor(private authService: AuthService, private sCv:CvService, private sPersona:PersonaService, 
    private formBuilder: FormBuilder) {
      //Modal información edit//
      this.form = this.formBuilder.group({
        id:[''],
        nombre:['',[Validators.required]],
        link:[''],
        anio_derechos: ['',[Validators.required]],
        personaid:['']
      })
     }

  ngOnInit(): void {
    this.cargarCv();
    this.cargarPersona();
    // this.infoService.getInformacion().subscribe(info =>{
    //   // console.log(info);
    //   this.nombre = info.nombre;
    //   this.apellido = info.apellido;
    //   this.botondescarga = info.botondescarga;
    // });
  }

  cargarCv():void {
    this.sCv.lista().subscribe(data =>{
      console.log(data);
      this.cvs = data;
    });
  }

  cargarPersona():void {
    this.sPersona.verpersonas().subscribe(data =>{
      this.personas = data;
      console.log(data);
    });
  }

  //Modal información edit//
get Nombre(){
  return this.form.get("nombre");
}

get Link(){
  return this.form.get("link");
}

get Descargacv(){
  return this.form.get("anio_derechos");
}

get Personaid(){
  return this.form.get("personaid");
}

onUpdate():void{
  let cvv = this.form.value;
    this.sCv.update(cvv.id, cvv).subscribe(
      data => {
        alert('Información editada correctamente');
        window.location.reload();
        this.form.reset();
      })
  }

  detail(id:number){
    this.sCv.detail(id).subscribe(data =>{
      this.form.setValue(data);
      console.log(data);
    })
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("Falló al editar la información, intente nuevamente");
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
