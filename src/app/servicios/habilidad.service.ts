import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Habilidad from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private url_backend = environment.url_backend;

  constructor(private http : HttpClient) { }

  public Get_habilidades(tipo:string) : Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.url_backend+"/habilidad/all/tipo/"+tipo);
  }

  public Get_habilidades_estado(estado:string) : Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.url_backend+"/habilidad/all/estado/"+estado);
  }

  public Edit_habilidad(id_habilidad:number, habilidad : Habilidad) : void {
    this.http.put(this.url_backend+"/habilidad/edit/id/"+id_habilidad,habilidad);
  }
}