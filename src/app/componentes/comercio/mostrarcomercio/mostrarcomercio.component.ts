import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarcomercioService } from '../../../servicios/mostrarcomercio.service';
import { ComercioService } from '../../../servicios/comercio.service';

@Component({
  selector: 'app-mostrarcomercio',
  templateUrl: './mostrarcomercio.component.html',
  styleUrls: ['./mostrarcomercio.component.css']
})
export class MostrarcomercioComponent implements OnInit {

  scomercio: any[];
  idcm: any;
  comercioid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mcmservice: MostrarcomercioService, 
    private _comercioservice: ComercioService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let cm=this;
    cm._comercioservice.getcomercios()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            console.log(this.data);
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.scomercio=this.data;
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

  modificar(data){
    this.idcm= data;
    if(this.idcm!=0){
      this.idbn(this.idcm);
    }else{
      alert("Error al elegir un comercio");
    }
  }

  idbn(idcm){
    let bn=this;
    bn._comercioservice.getcomercioid(idcm)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.comercioid=this.data;
              this._mcmservice.set(this.comercioid);
              this.rt.navigateByUrl('editarcomercio');
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
    location.reload();
  }

}
