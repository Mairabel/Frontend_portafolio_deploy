import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Persona from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  protected persona : Persona = this.Limpiar();

  constructor(private persona_servicio : PersonaService) { }

  ngOnInit(): void {
    this.Instanciar_datos_persona();
  }

  private Instanciar_datos_persona() : void{
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