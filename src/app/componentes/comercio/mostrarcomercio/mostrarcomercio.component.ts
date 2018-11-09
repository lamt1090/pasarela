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
      this.idcom(this.idcm);
    }else{
      alert("Error al elegir un comercio");
    }
  }

  idcom(idcm){
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

  eliminar(data){
    this.idcm= data;
    if(this.idcm!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._comercioservice.existecomercio(this.idcm)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar este comercio, tiene sucarsales actualmente");
              }else{
                this.eliminaridcomercio(this.idcm);
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

  eliminaridcomercio(idcm){
    let bn=this;
    bn._comercioservice.eliminarcomercio(idcm)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este comercio");
            }else{
              alert("los datos se han borrado correctamente");
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
