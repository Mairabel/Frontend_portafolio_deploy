import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from 'src/app/models/usuario';
import { LoginService } from 'src/app/servicios/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected mensaje_error:any = undefined;
  protected selectedUsuario : Usuario = this.Limpiar();

  constructor(private login_servicio : LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  protected Acceso_login() : void{
    this.login_servicio.Autenticar(this.selectedUsuario).subscribe(
      {
        next : (response : boolean) => {
          this.Validar_datos(response);
        },
        error:(error:HttpErrorResponse) => {
          console.log("Usuario invalido "+error.message)
        }
      }
    )
  }
 
  private Validar_datos(response:boolean){
    if(response){
      environment.sesion.edicion_permitida = true;
      environment.sesion.nombre_button = 'CERRAR SESION';
      environment.sesion.ruta_destino = '';
      this.router.navigate(['']);
    }else{
      this.mensaje_error = 'Usuario y/o contraseña incorrectos.';
      this.router.navigate(['login']);
    }
  }

  private Limpiar() : Usuario {
    return {
      id_usuario:0,
      nombre:"",
      clave:""
    }
  }
}