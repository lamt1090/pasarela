import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarrequisitoService } from '../../../servicios/mostrarrequisito.service';
import { RequisitoService } from '../../../servicios/requisito.service';

@Component({
  selector: 'app-mostrarrequisito',
  templateUrl: './mostrarrequisito.component.html',
  styleUrls: ['./mostrarrequisito.component.css']
})
export class MostrarrequisitoComponent implements OnInit {

  srequisito: any[];//variable para guardar los requisitos
  idrq: any; //variable para saber la eleción elegida
  requisitoid: any[];//varible para guardar unrequisito especifico
  data: any;
  constructor(
    private rt: Router,
    private _mrqservice: MostrarrequisitoService, //objeto de conexión al mostrar
    private _requisitoservice: RequisitoService//objeto de conexión al servicio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar los requisito
  mostrar(){
    let rq=this;
    rq._requisitoservice.getrequisito()//petición al servicio para traer los datos de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.srequisito=this.data;//se guardan los datos en la variable
            }
          }else{
              rq = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para saber que se va a modificar
  modificar(data){
    this.idrq= data;
    if(this.idrq!=0){
      this.idbn(this.idrq);//se llama el metodo que hace la modificación
    }else{
      alert("Error al elegir requisito");
    }
  }

  //metodo para saber que datos a modificar
  idbn(idrq){
    let bn=this;
    bn._requisitoservice.getrequisitoid(idrq)//petición al servicio para traer datos a modificar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.requisitoid=this.data;// se reciben los datos traidos
              this._mrqservice.set(this.requisitoid); //envio de datos al servico mostrar para guardarlos
              this.rt.navigateByUrl('editarrequisito');//redireciona la vista
            }
          }else{
              bn = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para actualiza la vista
  actualizar(){
    location.reload();//se recarga la vista
  }

  //metodo para saber si se puede eliminar un dato
  eliminar(data){
    this.idrq= data;
    if(this.idrq!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._requisitoservice.existerequisito(this.idrq)//petición al servicio para saber si el dato se puede eliminar o no
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar este requisito, es utilizado en la tabla validar estado");
              }else{
                this.eliminaridrequisito(this.idrq);//llamdo al metodo de eliminar
              }
            }else{
                cat = result.data;
            }
        },
        error => {
            console.log(<any>error);
        }
        )
        
      }
    }else{
      alert("Error al elegir el banco");
    }
  }

  //metodo de eliminar
  eliminaridrequisito(idrq){
    let bn=this;
    bn._requisitoservice.eliminarrequisito(idrq)//petición al servicio para enviar el dato a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este requisito");
            }else{
              alert("los datos se han borrado correctamente");
              location.reload();//se recarga la vista
            }
          }else{
              bn = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

}
