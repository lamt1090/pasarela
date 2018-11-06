import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrartipocuentaService } from '../../../servicios/mostrartipocuenta.service';
import { TipoCuentaService } from '../../../servicios/tipo-cuenta.service';

@Component({
  selector: 'app-mostrartipocuenta',
  templateUrl: './mostrartipocuenta.component.html',
  styleUrls: ['./mostrartipocuenta.component.css']
})
export class MostrartipocuentaComponent implements OnInit {
  stpcuenta: any[];
  idtpc: any;
  tpcuentaid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mtpcservice: MostrartipocuentaService, 
    private _tpcuentaservice: TipoCuentaService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let tp=this;
    tp._tpcuentaservice.gettpcuenta()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.stpcuenta=this.data;
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
      this.idbn(this.idtpc);
    }else{
      alert("Error al elegir tipo de cuenta");
    }
  }

  idbn(idtpc){
    let bn=this;
    bn._tpcuentaservice.gettpcuentaid(idtpc)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.tpcuentaid=this.data;
              this._mtpcservice.set(this.tpcuentaid);
              this.rt.navigateByUrl('editartipocuenta');
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
