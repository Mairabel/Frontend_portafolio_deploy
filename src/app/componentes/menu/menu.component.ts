import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  protected session = environment.sesion;
  protected style : string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.session.nombre_button=="LOGIN"){
      this.style = "text-white btn-outline-info"
    }else{
      this.style = "text-danger btn-outline"
    }
  }

}
