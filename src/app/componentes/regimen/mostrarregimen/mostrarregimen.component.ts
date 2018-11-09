import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarregimenService } from '../../../servicios/mostrarregimen.service';
import { RegimenService } from '../../../servicios/regimen.service';

@Component({
  selector: 'app-mostrarregimen',
  templateUrl: './mostrarregimen.component.html',
  styleUrls: ['./mostrarregimen.component.css']
})
export class MostrarregimenComponent implements OnInit {

  sregimen: any[];
  idrg: any;
  regimenid: any[];
  data: any;

  constructor(
    private rt: Router,
    private _mrgservice: MostrarregimenService, 
    private _regimenservice: RegimenService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let rg=this;
    rg._regimenservice.getregimen()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sregimen=this.data;
            }
          }else{
              rg = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.idrg= data;
    if(this.idrg!=0){
      this.idbn(this.idrg);
    }else{
      alert("Error al elegir regimen");
    }
  }

  idbn(idrg){
    let bn=this;
    bn._regimenservice.getregimenid(idrg)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.regimenid=this.data;
              this._mrgservice.set(this.regimenid);
              this.rt.navigateByUrl('editarregimen');
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
    this.idrg= data;
    if(this.idrg!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._regimenservice.existeregimen(this.idrg)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta regimen, un comercio lo esta usando");
              }else{
                this.eliminaridregimen(this.idrg);
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
      alert("Error al elegir el banco");
    }
  }

  eliminaridregimen(idrg){
    let bn=this;
    bn._regimenservice.eliminarregimen(idrg)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta regimen");
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
