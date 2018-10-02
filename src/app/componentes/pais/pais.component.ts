import { Component, OnInit } from '@angular/core';
import { PaisModule } from '../../modelos/pais/pais.module';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  
  public pais: PaisModule;

  constructor() { 
    this.pais= new PaisModule("");
  }

  ngOnInit() {
  }

    onsubmit(){
      console.log(this.pais);
    }
}
