import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url:string = "https://portfolio-natanielferreyra15.koyeb.app/contactos/";
  // url:string = "http://localhost:8080/api/contacto/";
  constructor(private httpClient:HttpClient) { }
  public send(Contacto : Contacto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'sendEmail', Contacto);
  }
}
