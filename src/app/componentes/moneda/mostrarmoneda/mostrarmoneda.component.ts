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

  smoneda: any[]; //variable para guardar la monedas de la BD
  idmd: any; //variable para guardar la selección del formulario
  monedaid: any[]; //variable para guardar una modeda en especifico
  data: any;
  constructor(
    private rt: Router,
    private _mcoinservice: MostrarmonedasService,//objeto de conexión al mostrar
    private _monedaservice: MonedaService //objeto de conexión al servicio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar el listado de monedas
  mostrar(){
    let md=this;
    md._monedaservice.getmoneda()//petición al servicio para obtener los datos de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.smoneda=this.data;//se guardan los datos obtenidos
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

  //metodo para saber que moned se va a modificar
  modificar(data){
    this.idmd= data;
    if(this.idmd!=0){
      this.idbn(this.idmd);//llamado al metodo para modificar
    }else{
      alert("Error al elegir moneda");
    }
  }

  //metodo modificar
  idbn(idmd){
    let bn=this;
    bn._monedaservice.getmonedaid(idmd)//petición para obtener los datos que se van a modificar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.monedaid=this.data;//se obtienen los datos 
              this._mcoinservice.set(this.monedaid);//se envian al mostrar para ser guardados
              this.rt.navigateByUrl('editarmoneda');//se redirecciona a otra vista
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

  //metodo actualizar
  actualizar(){
    location.reload();//se recarga la página
  }

  //metodo para saber que moneda eliminar
  eliminar(data){
    this.idmd= data;
    if(this.idmd!=0){
      if(confirm("seguro")== true){
        this.eliminaridmoneda(this.idmd);//llamado al metodo eliminar
      }
    }else{
      alert("Error al elegir el banco");
    }
  }

  //metodo eliminar
  eliminaridmoneda(idmd){
    let bn=this;
    bn._monedaservice.eliminarmoneda(idmd)//petición al servicio para enviar los datos a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay datos para esta opción");
            }else{
              alert("los datos se han borrado correctamente");
              location.reload();//se recarga la vista
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
