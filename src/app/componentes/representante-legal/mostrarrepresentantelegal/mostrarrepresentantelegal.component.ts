import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarrepresentantelegalService } from '../../../servicios/mostrarrepresentantelegal.service';
import { RepresentanteLegalService } from '../../../servicios/representante-legal.service';

@Component({
  selector: 'app-mostrarrepresentantelegal',
  templateUrl: './mostrarrepresentantelegal.component.html',
  styleUrls: ['./mostrarrepresentantelegal.component.css']
})
export class MostrarrepresentantelegalComponent implements OnInit {

  sreplegal: any[];
  idrp: any;
  replegalid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mrpservice: MostrarrepresentantelegalService, 
    private _replegalservice: RepresentanteLegalService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let cate=this;
    cate._replegalservice.getrepresentante()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sreplegal=this.data;
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

  modificar(data){
    this.idrp= data;
    if(this.idrp!=0){
      this.idrep(this.idrp);
    }else{
      alert("Error al elegir el representante legal");
    }
  }

  idrep(idrp){
    let bn=this;
    bn._replegalservice.getrepresentanteid(idrp)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.replegalid=this.data;
              this._mrpservice.set(this.replegalid);
              this.rt.navigateByUrl('editarrepresentantelegal');
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
    this.idrp= data;
    if(this.idrp!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._replegalservice.existerepresentante(this.idrp)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar este representante, tiene un comercio asignado");
              }else{
                this.eliminaridreplegal(this.idrp);
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

  eliminaridreplegal(idrp){
    let bn=this;
    bn._replegalservice.eliminarrepresentante(idrp)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este representante");
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
