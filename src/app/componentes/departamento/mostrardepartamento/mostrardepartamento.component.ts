import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrardepartamentoService } from '../../../servicios/mostrardepartamento.service';
import { DepartamentoService } from '../../../servicios/departamento.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mostrardepartamento',
  templateUrl: './mostrardepartamento.component.html',
  styleUrls: ['./mostrardepartamento.component.css']
})
export class MostrardepartamentoComponent implements OnInit {

  sdepartamento: any[]; //variable para guardar los departamentos de la BD
  iddpto: any; //variable para guardar la selección del formulario
  departamentoid: any[]; //variable para guardar los datos de un departamento en especifico
  data: any;
  constructor(
    private rt: Router,
    private _mdptoservice: MostrardepartamentoService, //objeto de conexión con el mostrar
    private _departamentoservice: DepartamentoService//objeto de conexión con el serviciio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar 
  mostrar(){
    let dpto=this;
    dpto._departamentoservice.getdepartamentos()//petición al servicio para obtener los datos de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay departamentos en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sdepartamento=this.data;//se guardan los datos obtenidos
            }
          }else{
              dpto = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para saber que departamento se modifica
  modificar(data){
    this.iddpto= data;
    if(this.iddpto!=0){
      this.idbn(this.iddpto);//llamada al metodo modificar
    }else{
      alert("Error al elegir departamento");
    }
  }

  //metodo modificar
  idbn(iddpto){
    let bn=this;
    bn._departamentoservice.getdepartamentoid(iddpto)//petición al servicio para traer los datos del departamento a modificar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.departamentoid=this.data;//se obtienen lso datos 
              this._mdptoservice.set(this.departamentoid);//se envian al mostrar para guardarse
              this.rt.navigateByUrl('editardepartamento');//se redirecciona a otra vista
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

  //metodo para actualizar
  actualizar(){
    location.reload();//se recarga la vista
  }

  //metodo para saber que departamento eliminar
  eliminar(data){
    this.iddpto= data;
    if(this.iddpto!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._departamentoservice.existedepartamento(this.iddpto)//petición al servicio para saber si se puede elimianr el departamento
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                swal({
                  type: 'error',
                  title: 'No se puede eliminar este departamento',
                  text: 'Tiene ciudades asignadas',
                  /*footer: '<a href>Why do I have this issue?</a>'*/
                })
              }else{
                this.eliminariddepartamento(this.iddpto);//lamado al metodo eliminar
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
      alert("Error al elegir el departamento");
    }
  }

  //metodo eliminar
  eliminariddepartamento(iddpto){
    let bn=this;
    bn._departamentoservice.eliminardepartamento(iddpto)//petición al servicio para enviar los datos a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este departamento");
            }else{
              swal({
                type: 'success',
                title: 'Datos borrados correctamente',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
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
