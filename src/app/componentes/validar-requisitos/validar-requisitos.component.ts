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
  srequisito : any[];
  scomercio : any[];
  sestadorequisito : any[];
  public validarrequisito: ValidarRequisitosModule;
  
  constructor(
    private _validarrequisitoservice: ValidarRequisitosService
  ) { 
    this.requisitos();
    this.comercios();
    this.estadorequisitos();
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

  requisitos(){
    let cate=this;
    cate._validarrequisitoservice.getrequisitos()
    .subscribe(
      result => {
          if(result.code != 200){
            this.srequisito=result;
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  comercios(){
    let cate=this;
    cate._validarrequisitoservice.getcomercios()
    .subscribe(
      result => {
          if(result.code != 200){
            this.scomercio=result;
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  estadorequisitos(){
    let cate=this;
    cate._validarrequisitoservice.getestadorequisitos()
    .subscribe(
      result => {
          if(result.code != 200){
            this.sestadorequisito=result;
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

}
