import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarrepresentantelegalService } from '../../../servicios/mostrarrepresentantelegal.service';
import { RepresentanteLegalService } from '../../../servicios/representante-legal.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mostrarrepresentantelegal',
  templateUrl: './mostrarrepresentantelegal.component.html',
  styleUrls: ['./mostrarrepresentantelegal.component.css']
})
export class MostrarrepresentantelegalComponent implements OnInit {

  sreplegal: any[];//variable para guardar los representantes
  idrp: any; //variable para guardar la selección del representante
  replegalid: any[]; //variable para guardar los datos del representante a editar
  data: any;
  constructor(
    private rt: Router,
    private _mrpservice: MostrarrepresentantelegalService, //objeto de conexión con el mostrar
    private _replegalservice: RepresentanteLegalService //objeto de conexión con el servicio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar 
  mostrar(){
    let cate=this;
    cate._replegalservice.getrepresentante()//petición al servicio para traer los datos de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay representantes legales en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sreplegal=this.data;//se guardan los datos obtenidos
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

  //metodo para saber que dato modificar
  modificar(data){
    this.idrp= data;
    if(this.idrp!=0){
      this.idrep(this.idrp);//llamado al metodo que trae los datos a modificar
    }else{
      alert("Error al elegir el representante legal");
    }
  }

  //metodo modificar
  idrep(idrp){
    let bn=this;
    bn._replegalservice.getrepresentanteid(idrp)//petición al servicio para traer los datos del representante que se va a editar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.replegalid=this.data;//se guardan los datos obtenidos
              this._mrpservice.set(this.replegalid);//se envia al mostrar para ser guardados
              this.rt.navigateByUrl('editarrepresentantelegal');//se rediecciona a otra vista
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
    location.reload();//se recarga la vista
  }

  //metodoa para saber si se puede eliminar un representante
  eliminar(data){
    this.idrp= data;
    if(this.idrp!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._replegalservice.existerepresentante(this.idrp)//petición al servicio para saber si un representante se puede eliminar o no
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                swal({
                  type: 'error',
                  title: 'No se puede eliminar este representante legal',
                  text: 'Tiene un comercio asigando',
                  /*footer: '<a href>Why do I have this issue?</a>'*/
                })
              }else{
                this.eliminaridreplegal(this.idrp);//llamado al metodo eliminar
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
      alert("Error al elegir el representante legal");
    }
  }

  //metodo eliminar
  eliminaridreplegal(idrp){
    let bn=this;
    bn._replegalservice.eliminarrepresentante(idrp)//petición al servico para enviar el dato a eliminar 
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este representante");
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
