import { Component, OnInit } from '@angular/core';
import { DeduccionModule } from '../../modelos/deduccion/deduccion.module';


@Component({
  selector: 'app-deduccion',
  templateUrl: './deduccion.component.html',
  styleUrls: ['./deduccion.component.css']
})
export class DeduccionComponent implements OnInit {
  
  public deduccion: DeduccionModule;

  constructor() {
    this.deduccion = new DeduccionModule("", "");
   }

  ngOnInit() {
  }

  onsubmit(){
    
    console.log(this.deduccion);
  }

}
