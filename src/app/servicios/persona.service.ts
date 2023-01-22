import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Persona from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url_backend = environment.url_backend;

  constructor(private http : HttpClient) { }

  public Get_persona() : Observable<Persona>{
    return this.http.get<Persona>(this.url_backend+"/persona/get/id/1");
  }

  public Edit_persona(persona : Persona) : void {
    this.http.put(this.url_backend+"/persona/edit",persona);
  }
}