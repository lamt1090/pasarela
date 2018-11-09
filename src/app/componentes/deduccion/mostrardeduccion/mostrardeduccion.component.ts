import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrardeduccionesService } from '../../../servicios/mostrardeducciones.service';
import { DeduccionService } from '../../../servicios/deduccion.service';

@Component({
  selector: 'app-mostrardeduccion',
  templateUrl: './mostrardeduccion.component.html',
  styleUrls: ['./mostrardeduccion.component.css']
})
export class MostrardeduccionComponent implements OnInit {

  sdeduccion: any[];
  iddc: any;
  deduccionid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mdcservice: MostrardeduccionesService, 
    private _deduccionservice: DeduccionService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let dc=this;
    dc._deduccionservice.getdeducciones()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sdeduccion=this.data;
            }
          }else{
              dc = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.iddc= data;
    if(this.iddc!=0){
      this.idbn(this.iddc);
    }else{
      alert("Error al elegir deducción");
    }
  }

  idbn(iddc){
    let bn=this;
    bn._deduccionservice.getdeduccionid(iddc)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.deduccionid=this.data;
              this._mdcservice.set(this.deduccionid);
              this.rt.navigateByUrl('editardeduccion');
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
    this.iddc= data;
    if(this.iddc!=0){
      if(confirm("seguro")== true){
        this.eliminariddeduccion(this.iddc);
      }
    }else{
      alert("Error al elegir la deducción");
    }
  }

  eliminariddeduccion(iddc){
    let bn=this;
    bn._deduccionservice.eliminardeduccion(iddc)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay datos para esta opción");
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
