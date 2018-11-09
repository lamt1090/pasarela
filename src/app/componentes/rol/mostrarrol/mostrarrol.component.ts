import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarrolesService } from '../../../servicios/mostrarroles.service';
import { RolService } from '../../../servicios/rol.service';

@Component({
  selector: 'app-mostrarrol',
  templateUrl: './mostrarrol.component.html',
  styleUrls: ['./mostrarrol.component.css']
})
export class MostrarrolComponent implements OnInit {

  srol: any[];
  idrol: any;
  rolid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mrolservice: MostrarrolesService, 
    private _rolservice: RolService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let rol=this;
    rol._rolservice.getrol()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.srol=this.data;
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

  modificar(data){
    this.idrol= data;
    if(this.idrol!=0){
      this.idbn(this.idrol);
    }else{
      alert("Error al elegir el rol");
    }
  }

  idbn(idrol){
    let bn=this;
    bn._rolservice.getrolid(idrol)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.rolid=this.data;
              this._mrolservice.set(this.rolid);
              this.rt.navigateByUrl('editarrol');
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
    this.idrol= data;
    if(this.idrol!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._rolservice.existerol(this.idrol)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta rol, ya está asignado a un usuario");
              }else{
                this.eliminaridrol(this.idrol);
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

  eliminaridrol(idrol){
    let bn=this;
    bn._rolservice.eliminarrol(idrol)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este rol");
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
