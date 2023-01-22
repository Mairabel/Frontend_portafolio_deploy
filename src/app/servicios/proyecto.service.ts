import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Proyecto from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url_backend = environment.url_backend;

  constructor(private http : HttpClient) { }

  public Get_proyectos() : Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url_backend+"/proyecto/all");
  }

  public Edit_proyecto(id_proyecto:number, proyecto : Proyecto) : void {
    this.http.put(this.url_backend+"/proyecto/edit/id/"+id_proyecto,proyecto);
  }
}