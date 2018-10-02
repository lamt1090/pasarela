import { Component, OnInit } from '@angular/core';
import { CiudadModule } from '../../modelos/ciudad/ciudad.module';


@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  
  public ciudad : CiudadModule;

  constructor() {
    this.ciudad = new CiudadModule("","");
   }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.ciudad);
  }
}
