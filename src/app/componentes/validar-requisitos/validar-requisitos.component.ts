import { Component, OnInit } from '@angular/core';
import { ValidarRequisitosModule } from '../../modelos/validar-requisitos/validar-requisitos.module';
import { ValidarRequisitosService } from '../../servicios/validar-requisitos.service';

@Component({
  selector: 'app-validar-requisitos',
  templateUrl: './validar-requisitos.component.html',
  styleUrls: ['./validar-requisitos.component.css'],
  providers: [ValidarRequisitosService]
})
export class ValidarRequisitosComponent implements OnInit {

  public validarrequisito: ValidarRequisitosModule;
  
  constructor(
    private _validarrequisitoservice: ValidarRequisitosService
  ) { 
    this.validarrequisito = new ValidarRequisitosModule("", "", "", "", "");
    
  }

  ngOnInit() {
  }

  onsubmit(){
    let vm = this;
    vm._validarrequisitoservice.addvalidarrequisito(vm.validarrequisito)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      } 
    )
  }

}
