import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarestadosrequisitosService } from '../../../servicios/mostrarestadosrequisitos.service';
import { EstadoRequisitoService } from '../../../servicios/estado-requisito.service';

@Component({
  selector: 'app-mostrarestado',
  templateUrl: './mostrarestado.component.html',
  styleUrls: ['./mostrarestado.component.css']
})
export class MostrarestadoComponent implements OnInit {

  sestado: any[];
  ider: any;
  estadoid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _merservice: MostrarestadosrequisitosService, 
    private _estadoservice: EstadoRequisitoService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let er=this;
    er._estadoservice.getestado()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sestado=this.data;
            }
          }else{
              er = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.ider= data;
    if(this.ider!=0){
      this.idbn(this.ider);
    }else{
      alert("Error al elegir estado de un requisito");
    }
  }

  idbn(ider){
    let bn=this;
    bn._estadoservice.getestadoid(ider)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.estadoid=this.data;
              this._merservice.set(this.estadoid);
              this.rt.navigateByUrl('editarestadorequisito');
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

}
