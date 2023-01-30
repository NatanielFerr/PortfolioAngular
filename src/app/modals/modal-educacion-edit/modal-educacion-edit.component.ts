import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApartadoEducacionComponent } from 'src/app/apartados/apartado-educacion/apartado-educacion.component';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion-edit',
  templateUrl: './modal-educacion-edit.component.html',
  styleUrls: ['./modal-educacion-edit.component.css']
})
export class ModalEducacionEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  habi: Educacion = null;

  constructor(private formBuilder: FormBuilder, private sEducacion: EducacionService) { }

  ngOnInit(): void {
  }

}
