import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarciudadService } from '../../../servicios/mostrarciudad.service';
import { CiudadService } from '../../../servicios/ciudad.service';

@Component({
  selector: 'app-mostrarciudad',
  templateUrl: './mostrarciudad.component.html',
  styleUrls: ['./mostrarciudad.component.css']
})
export class MostrarciudadComponent implements OnInit {

  sciudad: any[];
  idcd: any;
  ciudadid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mcdservice: MostrarciudadService, 
    private _ciudadservice: CiudadService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let cd=this;
    cd._ciudadservice.getciudades()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sciudad=this.data;
            }
          }else{
              cd = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.idcd= data;
    if(this.idcd!=0){
      this.idbn(this.idcd);
    }else{
      alert("Error al elegir ciudad");
    }
  }

  idbn(idcd){
    let bn=this;
    bn._ciudadservice.getciudadid(idcd)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.ciudadid=this.data;
              this._mcdservice.set(this.ciudadid);
              this.rt.navigateByUrl('editarciudad');
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
    this.idcd= data;
    if(this.idcd!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._ciudadservice.existeciudad(this.idcd)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta ciudad, esta asignada en una sucursal");
              }else{
                this.eliminaridciudad(this.idcd);
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
      alert("Error al elegir la ciudad");
    }
  }

  eliminaridciudad(idcd){
    let bn=this;
    bn._ciudadservice.eliminarciudad(idcd)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta ciudad");
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
