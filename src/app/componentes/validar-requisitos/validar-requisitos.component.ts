import { Component, OnInit } from '@angular/core';
import { ValidarRequisitosModule } from '../../modelos/validar-requisitos/validar-requisitos.module';
import { ValidarRequisitosService } from '../../servicios/validar-requisitos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validar-requisitos',
  templateUrl: './validar-requisitos.component.html',
  styleUrls: ['./validar-requisitos.component.css'],
  providers: [ValidarRequisitosService]
})
export class ValidarRequisitosComponent implements OnInit {
  srequisito : any[];
  scomercio : any[];
  data: any[];
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

  onsubmit(formvalidarestado: NgForm){
    let vm = this;
    vm._validarrequisitoservice.addvalidarrequisito(vm.validarrequisito)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formvalidarestado.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
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
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen ciudades para ese departamento")
            }else{
              this.srequisito=result;
            }
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
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen ciudades para ese departamento")
            }else{
              this.scomercio=result;
            }
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
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen ciudades para ese departamento")
            }else{
              this.sestadorequisito=result;
            }
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
