import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarrolesService } from '../../../servicios/mostrarroles.service';
import { RolService } from '../../../servicios/rol.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mostrarrol',
  templateUrl: './mostrarrol.component.html',
  styleUrls: ['./mostrarrol.component.css']
})
export class MostrarrolComponent implements OnInit {

  srol: any[]; //variable para guardar roles
  idrol: any; //variable el codigo del rol va a modificar
  rolid: any[]; //guarda los datos del rol traidos de la BD
  data: any;
  constructor(
    private rt: Router,
    private _mrolservice: MostrarrolesService, //objeto de conexión al mostrar
    private _rolservice: RolService //objeto de coonexión al servicio
  ) { 
    this.mostrar();//inicalización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar los roles 
  mostrar(){
    let rol=this;
    rol._rolservice.getrol()//petición al servicio y obtener los roles de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay roles en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.srol=this.data;//se guardan los datos traido de la BD
            }
          }else{
              rol = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para saber que dato se va a modificar
  modificar(data){
    this.idrol= data;
    if(this.idrol!=0){
      this.idbn(this.idrol);//llamado al metodo de modificar
    }else{
      alert("Error al elegir el rol");
    }
  }

  //metodo para s
  idbn(idrol){
    let bn=this;
    bn._rolservice.getrolid(idrol)//petición al servicio para traer los datos a modificar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.rolid=this.data; //se guardan en la variable
              this._mrolservice.set(this.rolid); //se envia al servicio para guardar
              this.rt.navigateByUrl('editarrol');//redirección a otra vista
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

  //metod para actualizar
  actualizar(){
    location.reload();//se recarga la linea
  }

  //metodo para confirmar si se puede eliminar
  eliminar(data){
    this.idrol= data;
    if(this.idrol!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._rolservice.existerol(this.idrol)//petición al servicio para saber si se puede eliminar o no
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                swal({
                  type: 'error',
                  title: 'No se puede eliminar este rol',
                  text: 'Esta asiganado a un representante legal',
                  /*footer: '<a href>Why do I have this issue?</a>'*/
                })
              }else{
                this.eliminaridrol(this.idrol);//llamado al metodo de eliminar 
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
      alert("Error al elegir el rol");
    }
  }

  //metodo eliminar
  eliminaridrol(idrol){
    let bn=this;
    bn._rolservice.eliminarrol(idrol)//petición al servicio para enviar el dato a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este rol");
            }else{
              swal({
                type: 'success',
                title: 'Datos borrados correctamente',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
              location.reload();// se recarga la vista
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
