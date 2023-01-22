import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Educacion from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private url_backend = environment.url_backend;

  constructor(private http : HttpClient) { }

  public Get_educaciones() : Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url_backend+"/educacion/all");
  }

  public Edit_educacion(id_educacion:number, educacion : any) : void {
    this.http.put(this.url_backend+"/educacion/edit/id/"+id_educacion,educacion);
  }
}