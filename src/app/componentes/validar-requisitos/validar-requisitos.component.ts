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
  srequisito : any[]; // guarda los requisitos para hacer el selet en el formulario
  scomercio : any[];  // guarda los comercios para hacer el selet en el formulario
  data: any[];
  sestadorequisito : any[]; // guarda los estados para hacer el selet en el formulario
  public validarrequisito: ValidarRequisitosModule;
  
  constructor(
    private _validarrequisitoservice: ValidarRequisitosService //declaro el objeto para acceder al servicio
  ) { 
    this.requisitos(); //metodos para hacer la consulta de los requisitos en la base de datos
    this.comercios(); //metodos para hacer la consulta de los comercios en la base de datos
    this.estadorequisitos(); //metodos para hacer la consulta de los estados de requisitos en la base de datos
    this.validarrequisito = new ValidarRequisitosModule("", "", "", "", ""); //objeto para asociar el modulo
    
  }

  ngOnInit() {
  }

  // metodo enviado desde el formulario
  onsubmit(formvalidarestado: NgForm){
    let vm = this;
    vm._validarrequisitoservice.addvalidarrequisito(vm.validarrequisito)//envio de datos al servicio para hacer la inserción
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
    cate._validarrequisitoservice.getrequisitos()//petición al servicio para hacer acceder al metodo
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen ciudades para ese departamento")
            }else{
              this.srequisito=result;//guardo en la variable el resultado
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
    cate._validarrequisitoservice.getcomercios() //petición al servicio para hacer acceder al metodo
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen ciudades para ese departamento")
            }else{
              this.scomercio=result; //guardo en la variable el resultado
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
    cate._validarrequisitoservice.getestadorequisitos() //petición al servicio para hacer acceder al metodo
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen ciudades para ese departamento")
            }else{
              this.sestadorequisito=result; //guardo en la variable el resultado
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
