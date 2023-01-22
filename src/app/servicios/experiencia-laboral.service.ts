import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Experiencia_laboral from '../models/experiencia_laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  private url_backend = environment.url_backend;

  constructor(private http : HttpClient) { }

  public Get_experiencias_laborales() : Observable<Experiencia_laboral[]>{
    return this.http.get<Experiencia_laboral[]>(this.url_backend+"/experiencia_laboral/all");
  }

  public Edit_experiencia_laboral(id_experiencia:number, experiencia_laboral : Experiencia_laboral) : void{
    this.http.put(this.url_backend+"/experiencia_laboral/edit/id/"+id_experiencia,experiencia_laboral);
  }
}