import { Component, OnInit } from '@angular/core';
import { RolModule } from '../../modelos/rol/rol.module';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  
  public rol: RolModule;

  constructor() {
    this.rol= new RolModule("");
   }

  ngOnInit() {
  }

    onsubmit(){
      console.log(this.rol);
    }
}
