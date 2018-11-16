import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrardeduccionesService } from '../../../servicios/mostrardeducciones.service';
import { DeduccionService } from '../../../servicios/deduccion.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mostrardeduccion',
  templateUrl: './mostrardeduccion.component.html',
  styleUrls: ['./mostrardeduccion.component.css']
})
export class MostrardeduccionComponent implements OnInit {

  sdeduccion: any[]; //variable para guardar la deducciones
  iddc: any; //variable para ver la selección del formulario
  deduccionid: any[];// variable para gauardar una deducción en especifico
  data: any;
  constructor(
    private rt: Router,
    private _mdcservice: MostrardeduccionesService, //objeto d econexión con el mostrar
    private _deduccionservice: DeduccionService//objeto de conexión con el servicio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo mostrar
  mostrar(){
    let dc=this;
    dc._deduccionservice.getdeducciones()//petición al servicio para obtener los datos de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay deducciones en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sdeduccion=this.data;//se guardan los datos obtenidos
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

  //metodo para saber la deducción seleccionada
  modificar(data){
    this.iddc= data;
    if(this.iddc!=0){
      this.idbn(this.iddc);//llamdo al metodo modificar
    }else{
      alert("Error al elegir deducción");
    }
  }

  //metodo modificar
  idbn(iddc){
    let bn=this;
    bn._deduccionservice.getdeduccionid(iddc)//petición al servicio para obtener los datos de la deducción seleccionada
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.deduccionid=this.data; //se obtienen los datos de la consulta
              this._mdcservice.set(this.deduccionid);//se envian al mostrar para guardar
              this.rt.navigateByUrl('editardeduccion');// se redirecciona a otra vista
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

  //metodo para actualizar
  actualizar(){
    location.reload();//se recarga la página
  }

  //metodo para saber que deducción eliminar
  eliminar(data){
    this.iddc= data;
    if(this.iddc!=0){
      if(confirm("seguro")== true){
        this.eliminariddeduccion(this.iddc);//lamado al metodo eliminar
      }
    }else{
      alert("Error al elegir la deducción");
    }
  }

  //metodo eliminar
  eliminariddeduccion(iddc){
    let bn=this;
    bn._deduccionservice.eliminardeduccion(iddc)//petición al servicio para enviar los datos a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay datos para esta opción");
            }else{
              swal({
                type: 'success',
                title: 'Datos borrados correctamente',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
              location.reload();//se recarga la página
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
