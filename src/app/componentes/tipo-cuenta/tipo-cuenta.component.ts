import { Component, OnInit } from '@angular/core';
import { TipoCuentaModule } from '../../modelos/tipo-cuenta/tipo-cuenta.module';


@Component({
  selector: 'app-tipo-cuenta',
  templateUrl: './tipo-cuenta.component.html',
  styleUrls: ['./tipo-cuenta.component.css']
})
export class TipoCuentaComponent implements OnInit {

  public tipocuenta: TipoCuentaModule;

  constructor() {
    this.tipocuenta= new TipoCuentaModule("");
   }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.tipocuenta);
  }

}
