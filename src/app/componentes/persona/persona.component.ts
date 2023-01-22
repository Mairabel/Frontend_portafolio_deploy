import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { environment } from 'src/environments/environment';
import Persona from '../../models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected style = "pt-5";
  protected persona : Persona = this.Limpiar();
  protected mensaje_error:any = undefined;

  constructor(private persona_servicio : PersonaService) { }

  ngOnInit(): void {
    this.Instanciar_persona();
    if(this.acceso){
      this.style = "pt-2";
    }
  }

  private Instanciar_persona() : void{
    this.persona_servicio.Get_persona().subscribe(
      {
        next : (response : Persona) => {
          this.persona = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }

  protected Actualizar() : void {
    this.persona_servicio.Edit_persona(this.persona);
    this.mensaje_error = "ACTUALIZACION EXITOSA";
  }

  protected Reiniciar() : void{
    this.persona = this.Limpiar();
    this.mensaje_error = undefined;
  }

  private Limpiar() : Persona{
    return {
      id_persona : 0,
      nombre : "",
      apellido : "",
      telefono : "",
      email : "",
      direccion : "",
      presentacion : "",
      titulo : ""
    };
  }
}