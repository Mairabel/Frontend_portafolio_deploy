import { Component, OnInit } from '@angular/core';
import Experiencia_laboral from 'src/app/models/experiencia_laboral';
import Educacion from 'src/app/models/educacion';
import { environment } from 'src/environments/environment';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ExperienciaLaboralService } from 'src/app/servicios/experiencia-laboral.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  protected experiencias_laborales:Experiencia_laboral[] = [];
  protected experiencias_laborales_editadas:Experiencia_laboral[] = [];
  protected educaciones:Educacion[] = [];
  protected educaciones_editadas:Educacion[] = [];
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected style = "pt-5";

  constructor(private educacion_servicio : EducacionService, private experiencia_laboral_servicio : ExperienciaLaboralService) { }

  ngOnInit(): void {
    this.Instanciar_educaciones();
    this.Instanciar_experiencia_laboral();
    if(this.acceso){
      this.style = "pt-2";
    }
  }

  protected Guardar() : void{
    this.mensaje = "CURRICULUM ACTUALIZADOS";
    for(let educacion_editada of this.educaciones_editadas){
      for(let educacion of this.educaciones){
        if(educacion_editada!=educacion){
          this.educacion_servicio.Edit_educacion(educacion_editada.id_educacion,educacion_editada);
        }
      }
    } 
    for(let experiencia_editada of this.experiencias_laborales_editadas){
      for(let experiencia of this.experiencias_laborales){
        if(experiencia_editada!=experiencia){
          this.experiencia_laboral_servicio.Edit_experiencia_laboral(experiencia_editada.id_experiencia_laboral,experiencia_editada);
        }
      }
    } 
  }

  protected Editar(){
    this.educaciones_editadas = this.educaciones; 
    this.experiencias_laborales_editadas = this.experiencias_laborales; 
  }

  private Instanciar_experiencia_laboral() : void{
    this.experiencia_laboral_servicio.Get_experiencias_laborales().subscribe(
      {
        next : (response : Experiencia_laboral[]) => {
          this.experiencias_laborales = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    )
  }
  private Instanciar_educaciones() : void{
    this.educacion_servicio.Get_educaciones().subscribe(
      {
        next : (response : Educacion[]) => {
          this.educaciones = response
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
      }
    );
  }
}