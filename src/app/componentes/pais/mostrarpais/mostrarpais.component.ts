import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarpaisService } from '../../../servicios/mostrarpais.service';
import { PaisService } from '../../../servicios/pais.service';

@Component({
  selector: 'app-mostrarpais',
  templateUrl: './mostrarpais.component.html',
  styleUrls: ['./mostrarpais.component.css']
})
export class MostrarpaisComponent implements OnInit {

  spais: any[];
  idpais: any;
  paisid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mpaisservice: MostrarpaisService, 
    private _paisservice: PaisService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let ps=this;
    ps._paisservice.getpaises()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.spais=this.data;
            }
          }else{
              ps = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.idpais= data;
    if(this.idpais!=0){
      this.idbn(this.idpais);
    }else{
      alert("Error al elegir el país");
    }
  }

  idbn(idpais){
    let bn=this;
    bn._paisservice.getpaisid(idpais)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.paisid=this.data;
              this._mpaisservice.set(this.paisid);
              this.rt.navigateByUrl('editarpais');
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
