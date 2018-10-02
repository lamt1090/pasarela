import { Component, OnInit } from '@angular/core';
import { EstadoRequisitoModule } from '../../modelos/estado-requisito/estado-requisito.module';


@Component({
  selector: 'app-estado-requisito',
  templateUrl: './estado-requisito.component.html',
  styleUrls: ['./estado-requisito.component.css']
})
export class EstadoRequisitoComponent implements OnInit {
  
  public estadorequisito: EstadoRequisitoModule;

  constructor() {
    this.estadorequisito= new EstadoRequisitoModule("");
   }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.estadorequisito);
  }

}
