import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/personas/';
  constructor(private httpClient:HttpClient) { }
  
  public verpersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'ver/personas');
  }

  public agregarpersona(Persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new/persona', Persona);
  }

  public editarpersona(id:number, Persona: Persona):Observable<any>{
    return this.httpClient.put<any>(this.url + `personas/editar/${id}`, Persona);
  }

  public eliminarpersona(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/persona/${id}`);
  }
}