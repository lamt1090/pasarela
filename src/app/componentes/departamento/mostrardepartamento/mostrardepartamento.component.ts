import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrardepartamentoService } from '../../../servicios/mostrardepartamento.service';
import { DepartamentoService } from '../../../servicios/departamento.service';

@Component({
  selector: 'app-mostrardepartamento',
  templateUrl: './mostrardepartamento.component.html',
  styleUrls: ['./mostrardepartamento.component.css']
})
export class MostrardepartamentoComponent implements OnInit {

  sdepartamento: any[];
  iddpto: any;
  departamentoid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mdptoservice: MostrardepartamentoService, 
    private _departamentoservice: DepartamentoService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let dpto=this;
    dpto._departamentoservice.getdepartamentos()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sdepartamento=this.data;
            }
          }else{
              dpto = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.iddpto= data;
    if(this.iddpto!=0){
      this.idbn(this.iddpto);
    }else{
      alert("Error al elegir departamento");
    }
  }

  idbn(iddpto){
    let bn=this;
    bn._departamentoservice.getdepartamentoid(iddpto)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.departamentoid=this.data;
              this._mdptoservice.set(this.departamentoid);
              this.rt.navigateByUrl('editardepartamento');
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
    this.iddpto= data;
    if(this.iddpto!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._departamentoservice.existedepartamento(this.iddpto)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar este departamento, tiene ciudades ");
              }else{
                this.eliminariddepartamento(this.iddpto);
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
      alert("Error al elegir el departamento");
    }
  }

  eliminariddepartamento(iddpto){
    let bn=this;
    bn._departamentoservice.eliminardepartamento(iddpto)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este departamento");
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
