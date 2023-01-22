import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Usuario from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url_backend = environment.url_backend;

  constructor(private http : HttpClient) { }

  public Autenticar(usuario : Usuario) : Observable<boolean>{
    return this.http.get<boolean>(this.url_backend+"/usuario/autenticar/"+usuario.nombre+"/"+usuario.clave);
  }
}