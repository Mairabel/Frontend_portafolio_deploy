import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Habilidad, { Tipo } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected style = "pt-5";
  protected habilidades_tecnicas : Habilidad[] = [];
  protected habilidades_blandas : Habilidad[] = [];
  protected selectedHabilidadTecnica : Habilidad = this.Limpiar();
  protected selectedHabilidadBlanda : Habilidad = this.Limpiar();
  protected mensaje:any = undefined;

  private id_habilidad_tecnica:number = 0;
  private id_habilidad_blanda:number = 0;

  constructor(private habilidad_servicio : HabilidadService) { }

  ngOnInit(): void {
    if(this.acceso){
      this.style = "pt-2";
    }
    this.Instanciar_habilidades();
  }
  
  protected Guardar() : void{
    this.mensaje = "HABILIDADES ACTUALIZADAS";
    if(this.selectedHabilidadTecnica.nombre!="Seleccionar"){
      this.habilidades_tecnicas.filter(i => i.nombre == this.selectedHabilidadTecnica.nombre).map(j => this.id_habilidad_tecnica = j.id_habilidad);
      this.habilidad_servicio.Edit_habilidad(this.id_habilidad_tecnica,this.selectedHabilidadTecnica);
    }
    if(this.selectedHabilidadBlanda.nombre!="Seleccionar"){
      this.habilidades_blandas.filter(i => i.nombre == this.selectedHabilidadBlanda.nombre).map(j => this.id_habilidad_blanda = j.id_habilidad);
      this.habilidad_servicio.Edit_habilidad(this.id_habilidad_blanda,this.selectedHabilidadBlanda);
    }
  }

  private Instanciar_habilidades() : void{
    this.habilidad_servicio.Get_habilidades("tecnica").subscribe(
      {
        next : (response : Habilidad[]) => {
          this.habilidades_tecnicas = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    );
    this.habilidad_servicio.Get_habilidades("blanda").subscribe(
      {
        next : (response : Habilidad[]) => {
          this.habilidades_blandas = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }
  protected Get_habilidades_tecnicas() : Habilidad[]{
    return this.habilidades_tecnicas;
  }
  protected Get_habilidades_blandas() : Habilidad[]{
    return this.habilidades_blandas;
  }
  private Limpiar() : Habilidad{
    return {
      id_habilidad : 0,
      nombre : "",
      porcentaje : 0,
      tipo : Tipo.blanda
    };
  }
}