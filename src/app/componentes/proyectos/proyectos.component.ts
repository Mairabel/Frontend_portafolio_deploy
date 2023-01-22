import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Proyecto from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  protected proyectos:Proyecto[] = [];
  protected proyectos_editados:Proyecto[] = [];
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected style = "pt-5";
  protected mensaje : any = undefined;

  constructor(private proyecto_servicio : ProyectoService) { }

  ngOnInit(): void {
    this.Intanciar_proyectos();
    if(this.acceso){
      this.style = "pt-2";
    }
  }

  protected Guardar() : void{
    this.mensaje = "PROYECTOS ACTUALIZADOS";
    for(let proyecto_editado of this.proyectos_editados){
      for(let proyecto of this.proyectos){
        if(proyecto_editado!=proyecto){
          this.proyecto_servicio.Edit_proyecto(proyecto_editado.id_proyecto,proyecto_editado);
        }
      }
    } 
  }

  protected Editar_proyectos(){
    this.proyectos_editados = this.proyectos; 
  }

  private Intanciar_proyectos() : void{
    this.proyecto_servicio.Get_proyectos().subscribe(
      {
        next : (response : Proyecto[]) => {
          this.proyectos = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }
}