import { Component, OnInit } from '@angular/core';
import { CuentaBancariaModule } from '../../modelos/cuenta-bancaria/cuenta-bancaria.module';


@Component({
  selector: 'app-cuenta-bancaria',
  templateUrl: './cuenta-bancaria.component.html',
  styleUrls: ['./cuenta-bancaria.component.css']
})
export class CuentaBancariaComponent implements OnInit {

  public cuentabancaria: CuentaBancariaModule;
  
  constructor() { 
    this.cuentabancaria = new CuentaBancariaModule();
  }

  ngOnInit() {
  }

    onsubmit(){
      console.log(this.cuentabancaria);
    }
}
