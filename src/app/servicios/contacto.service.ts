import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = 'http://localhost:8080/contactos/';
  constructor(private httpClient:HttpClient) { }
  public send(Contacto : Contacto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'send', Contacto);
  }
}
