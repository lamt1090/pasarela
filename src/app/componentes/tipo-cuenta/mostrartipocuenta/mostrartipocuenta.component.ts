import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrartipocuentaService } from '../../../servicios/mostrartipocuenta.service';
import { TipoCuentaService } from '../../../servicios/tipo-cuenta.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mostrartipocuenta',
  templateUrl: './mostrartipocuenta.component.html',
  styleUrls: ['./mostrartipocuenta.component.css']
})
export class MostrartipocuentaComponent implements OnInit {
  stpcuenta: any[]; //guarda los tipos de cuenta
  idtpc: any; //variable para saber cual es el tipo de cuenta a modificar
  tpcuentaid: any[]; //guarda el resultado de la consulta
  data: any;
  constructor(
    private rt: Router,
    private _mtpcservice: MostrartipocuentaService, //objeto para asociar el servicio mostrar
    private _tpcuentaservice: TipoCuentaService //objeto para asociar el srvicio 
  ) { 
    this.mostrar(); //inicialización del mostrar, consulta los tipo de cuenta de la base de datos
  }

  ngOnInit() {
  }

  mostrar(){
    let tp=this;
    tp._tpcuentaservice.gettpcuenta()//petición al servicio para buscar los tipos de cuenta
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay datos disponobles en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.stpcuenta=this.data; //se guarda en la variable
            }
          }else{
              tp = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.idtpc= data;
    if(this.idtpc!=0){
      this.idbn(this.idtpc);//se llama al metodo que va ha realizar la consulta a la selección
    }else{
      alert("Error al elegir tipo de cuenta");
    }
  }

  idbn(idtpc){
    let bn=this;
    bn._tpcuentaservice.gettpcuentaid(idtpc)//petición al servicio para usar el metodo
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.tpcuentaid=this.data; //se guarda en la variable
              this._mtpcservice.set(this.tpcuentaid); // se envia al mostrarservice para que se guarde
              this.rt.navigateByUrl('editartipocuenta'); //se dirigue a la vista
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

  actualizar(){
    location.reload(); //recarga la página
  }

  eliminar(data){
    this.idtpc= data; //guarda el dato a eliminar
    if(this.idtpc!=0){
      if(confirm("seguro")== true){
        this.eliminaridtpcuenta(this.idtpc); //se llama al metodo que va ha realizar la eliminación
      }
    }else{
      alert("Error al elegir el tipo de cuenta");
    }
  }

  eliminaridtpcuenta(idtpc){
    let bn=this;
    bn._tpcuentaservice.eliminartpcuenta(idtpc)//petición al servicio para eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              swal({
                type: 'success',
                title: 'Datos eliminados correctamente',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              }); //datos eliminados
              location.reload(); //recarga la página
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
