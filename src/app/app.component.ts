import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-frontend';


  constructor(){
    let educacion = [
      {
        institucion : "UTN",
        carrera : "Ingenieria en sistemas",
        fecha_inicio : "2020-01-01",
        fecha_fin : "2022-06-21",
        url_imagen : "https://perros.png"
      },
      {
        institucion : "FRT",
        carrera : "perros fi",
        fecha_inicio : "2020-212",
        fecha_fin : "2020-01-01",
        url_imagen : "../assets/perrros.png"
      }
    ]
    let proyectos = [
      {

      },
      {
        
      }
    ]
  }


}
