import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarrequisitoService } from '../../../servicios/mostrarrequisito.service';
import { RequisitoService } from '../../../servicios/requisito.service';

@Component({
  selector: 'app-mostrarrequisito',
  templateUrl: './mostrarrequisito.component.html',
  styleUrls: ['./mostrarrequisito.component.css']
})
export class MostrarrequisitoComponent implements OnInit {

  srequisito: any[];
  idrq: any;
  requisitoid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mrqservice: MostrarrequisitoService, 
    private _requisitoservice: RequisitoService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let rq=this;
    rq._requisitoservice.getrequisito()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.srequisito=this.data;
            }
          }else{
              rq = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.idrq= data;
    if(this.idrq!=0){
      this.idbn(this.idrq);
    }else{
      alert("Error al elegir requisito");
    }
  }

  idbn(idrq){
    let bn=this;
    bn._requisitoservice.getrequisitoid(idrq)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.requisitoid=this.data;
              this._mrqservice.set(this.requisitoid);
              this.rt.navigateByUrl('editarrequisito');
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
    this.idrq= data;
    if(this.idrq!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._requisitoservice.existerequisito(this.idrq)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar este requisito, es utilizado en la tabla validar estado");
              }else{
                this.eliminaridrequisito(this.idrq);
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

  eliminaridrequisito(idrq){
    let bn=this;
    bn._requisitoservice.eliminarrequisito(idrq)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este requisito");
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
