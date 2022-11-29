import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.maxLength(12), Validators.minLength(4)]],
   })

  }

  ngOnInit(): void {
  }

  get Password(){
    return this.form.get("password");
  }
  
  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get Mail(){
   return this.form.get("email");
  }
  
  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }


  onLogin(event: Event){

    event.preventDefault; 
 
    if (this.form.valid){
      
    }else{
      this.form.markAllAsTouched(); 
    }
 
  }

}
