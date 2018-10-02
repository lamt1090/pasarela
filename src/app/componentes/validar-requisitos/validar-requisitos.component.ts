import { Component, OnInit } from '@angular/core';
import { ValidarRequisitosModule } from '../../modelos/validar-requisitos/validar-requisitos.module';


@Component({
  selector: 'app-validar-requisitos',
  templateUrl: './validar-requisitos.component.html',
  styleUrls: ['./validar-requisitos.component.css']
})
export class ValidarRequisitosComponent implements OnInit {

  public validarrequisito: ValidarRequisitosModule;

  constructor() { 
    this.validarrequisito = new ValidarRequisitosModule("", "", "", "", "");
  }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.validarrequisito);
  }

}
