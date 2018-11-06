import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarmonedasService } from '../../../servicios/mostrarmonedas.service';
import { MonedaService } from '../../../servicios/moneda.service';

@Component({
  selector: 'app-mostrarmoneda',
  templateUrl: './mostrarmoneda.component.html',
  styleUrls: ['./mostrarmoneda.component.css']
})
export class MostrarmonedaComponent implements OnInit {

  smoneda: any[];
  idmd: any;
  monedaid: any[];
  data: any;
  constructor(
    private rt: Router,
    private _mcoinservice: MostrarmonedasService, 
    private _monedaservice: MonedaService
  ) { 
    this.mostrar();
  }

  ngOnInit() {
  }

  mostrar(){
    let md=this;
    md._monedaservice.getmoneda()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.smoneda=this.data;
            }
          }else{
              md = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  modificar(data){
    this.idmd= data;
    if(this.idmd!=0){
      this.idbn(this.idmd);
    }else{
      alert("Error al elegir categoria");
    }
  }

  idbn(idmd){
    let bn=this;
    bn._monedaservice.getmonedaid(idmd)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.monedaid=this.data;
              this._mcoinservice.set(this.monedaid);
              this.rt.navigateByUrl('editarmoneda');
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
