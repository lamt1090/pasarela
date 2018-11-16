import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarcomercioService } from '../../../servicios/mostrarcomercio.service';
import { ComercioService } from '../../../servicios/comercio.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mostrarcomercio',
  templateUrl: './mostrarcomercio.component.html',
  styleUrls: ['./mostrarcomercio.component.css']
})
export class MostrarcomercioComponent implements OnInit {

  scomercio: any[];//variable para guardar los comercio
  idcm: any;//variable para saber la seleción del formulario
  comercioid: any[];//variable para guardar un comercio especifico
  data: any;
  constructor(
    private rt: Router,
    private _mcmservice: MostrarcomercioService, //objeto de conexión con el mostrar
    private _comercioservice: ComercioService //objeto de conexión con el servicio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo mostrar
  mostrar(){
    let cm=this;
    cm._comercioservice.getcomercios()//petición al servicio para obtener los coemrcicos de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay comercios en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.scomercio=this.data;//se guardan los datos obtenidos en la consulta
            }
          }else{
              cm = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para saber que comercio selecciono
  modificar(data){
    this.idcm= data;
    if(this.idcm!=0){
      this.idcom(this.idcm);//llamada al metodo modificar
    }else{
      alert("Error al elegir un comercio");
    }
  }

  //metodo modificar
  idcom(idcm){
    let bn=this;
    bn._comercioservice.getcomercioid(idcm)//petición al servicio para obtener el comercio a editar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay datos para esta opción");
            }else{
              this.comercioid=this.data;//se obtienen los datos de la consulta
              this._mcmservice.set(this.comercioid);//se envia los datos al mostrar para guardarlos
              this.rt.navigateByUrl('editarcomercio');//se redirecciona la vista
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

  //metodo actualizar
  actualizar(){
    location.reload();//se recarga la página
  }

  //metodo para saber que comercio se va a eliminar
  eliminar(data){
    this.idcm= data;
    if(this.idcm!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._comercioservice.existecomercio(this.idcm)//petición al servicio para saber si el comercio seleccionado se puede eliminar
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                swal({
                  type: 'error',
                  title: 'No se puede eliminar este comercio',
                  text: 'Tiene sucursales asignadas',
                  /*footer: '<a href>Why do I have this issue?</a>'*/
                })
              }else{
                this.eliminaridcomercio(this.idcm);//llamada al metodo eliminar
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
      alert("Error al elegir el comercio");
    }
  }

  //metodo eliminar
  eliminaridcomercio(idcm){
    let bn=this;
    bn._comercioservice.eliminarcomercio(idcm)//petición al servicio para enviar los datos a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este comercio");
            }else{
              swal({
                type: 'success',
                title: 'Datos borrados correctamente',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
              location.reload();
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
