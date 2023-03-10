import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../models/contacto';
import { ContactoService } from '../servicios/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombre_y_apellido:'';
  telefono:'';
  email:'';
  asunto:'';
  mensaje:'';

  // title = 'EmailTemplate';

  // dataset: Details = {
  //   nombre_y_apellido: '',
  //   telefono:'',
  //   email:'',
  //   asunto:'',
  //   mensaje:''
  // };


  constructor(private sContacto:ContactoService) {
      
     }

  ngOnInit(): void {
  }

  Send():void{
    const contacto = new Contacto (this.asunto,this.email,this.mensaje,
      this.nombre_y_apellido,this.telefono);
    this.sContacto.send(contacto).subscribe(
      data => {
      alert("Mail Enviado");
      this.asunto='';
      this.email='';
      this.mensaje='';
      this.telefono='';
      this.nombre_y_apellido='';
    
    })
  }

//   onSubmit()
//   {
//     this.https.post<Details>('http://localhost:8080/testapp/traer', this.dataset).subscribe(
//       res => {
//         this.dataset = res;
//         console.log(this.dataset);
//         alert('Email Sent successfully');
//         this.dataset.asunto = '',
//         this.dataset.email = '',
//         this.dataset.telefono = '',
//         this.dataset.mensaje = '',
//         this.dataset.nombre_y_apellido = ''   
//       });
//   }
// }

// interface Details
// {
//   nombre_y_apellido: '',
//   telefono:'',
//   email:'',
//   asunto:'',
//   mensaje:''

}
