import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarivaService } from '../../../servicios/mostrariva.service';
import { IvaService } from '../../../servicios/iva.service';

@Component({
  selector: 'app-mostrariva',
  templateUrl: './mostrariva.component.html',
  styleUrls: ['./mostrariva.component.css']
})
export class MostrarivaComponent implements OnInit {

  siva: any[];
  idiva: any;
  ivaid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mivaservice: MostrarivaService, 
    private _ivaservice: IvaService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let cate=this;
    cate._ivaservice.getiva()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.siva=this.data;
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
    this.idiva= data;
    if(this.idiva!=0){
      this.idbn(this.idiva);
    }else{
      alert("Error al elegir iva");
    }
  }

  idbn(idiva){
    let bn=this;
    bn._ivaservice.getivaid(idiva)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.ivaid=this.data;
              this._mivaservice.set(this.ivaid);
              this.rt.navigateByUrl('editariva');
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
    this.idiva= data;
    if(this.idiva!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._ivaservice.existeiva(this.idiva)
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar el iva, un comercio tiene este valor");
              }else{
                this.eliminaridiva(this.idiva);
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

  eliminaridiva(idiva){
    let bn=this;
    bn._ivaservice.eliminariva(idiva)
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta categoria");
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
