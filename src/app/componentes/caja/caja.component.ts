import { Component, OnInit } from '@angular/core';
import { CajaModule } from '../../modelos/caja/caja.module';


@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
 
  public caja : CajaModule;

  constructor() { 
    this.caja = new CajaModule("", "");
  }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.caja);
  }
  

}
