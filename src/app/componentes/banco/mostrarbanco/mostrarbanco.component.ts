import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../../servicios/banco.service';
import { BancoModule } from '../../../modelos/banco/banco.module';
import { Router } from '@angular/router';
import { MostrarbancoService } from '../../../servicios/mostrarbanco.service';

@Component({
  selector: 'app-mostrarbanco',
  templateUrl: './mostrarbanco.component.html',
  styleUrls: ['./mostrarbanco.component.css']
})
export class MostrarbancoComponent implements OnInit {

  sbanco: any[];
  idb: any;
  bancoid: any[];
  data: any;
  public banco: BancoModule;

  constructor(
    private rt: Router,
    private _mbservice: MostrarbancoService, 
    private _bancoservice: BancoService
  ) {
    this.mostrar();
   }

  ngOnInit() {
  }

  mostrar(){
    let cate=this;
    cate._bancoservice.getbancos()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sbanco=this.data;
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
    this.idb= data;
    if(this.idb!=0){
      this.idbn(this.idb);
    }else{
      alert("Error al elegir el banco");
    }
  }

  idbn(idb){
    let bn=this;
    bn._bancoservice.getbancoid(idb)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.bancoid=this.data;
              this._mbservice.set(this.bancoid);
              this.rt.navigateByUrl('editarbanco');
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
    this.idb= data;
    if(this.idb!=0){
      if(confirm("seguro")== true){
        this.eliminaridbn(this.idb);
      }
    }else{
      alert("Error al elegir el banco");
    }
  }

  eliminaridbn(idb){
    let bn=this;
    bn._bancoservice.eliminarbanco(idb)
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
