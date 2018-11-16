import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarpaisService } from '../../../servicios/mostrarpais.service';
import { PaisService } from '../../../servicios/pais.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mostrarpais',
  templateUrl: './mostrarpais.component.html',
  styleUrls: ['./mostrarpais.component.css']
})
export class MostrarpaisComponent implements OnInit {

  spais: any[]; //variable para guardar los paises de la BD
  idpais: any; //variable para saber que pais escogio en el formulario
  paisid: any[]; //variable para guardar los datos de un país en especifico
  data: any;
  constructor(
    private rt: Router,
    private _mpaisservice: MostrarpaisService, //objeto de conexión con el mostrar
    private _paisservice: PaisService //objeto de conexión con el servicio
  ) { 
    this.mostrar();//inicalización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar
  mostrar(){
    let ps=this;
    ps._paisservice.getpaises()//petición al servicio para obtener los datos de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay paises en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.spais=this.data;//e fuardan los datos obtenidos en la consulta
            }
          }else{
              ps = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para saber la elección del país
  modificar(data){
    this.idpais= data;
    if(this.idpais!=0){
      this.idbn(this.idpais);//se llama el metodo que traer los datos a editar
    }else{
      alert("Error al elegir el país");
    }
  }

  //metodo para traer los datos a editar
  idbn(idpais){
    let bn=this;
    bn._paisservice.getpaisid(idpais)//petició al servicio para obtener los datos a editar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.paisid=this.data; //se obtienen los datos
              this._mpaisservice.set(this.paisid);// se envian al mostrar para ser guardados
              this.rt.navigateByUrl('editarpais');//se redireciona a otra vista
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

  //medoto actualizar
  actualizar(){
    location.reload();//se recarga la vista actual
  }

  //metodo para saber si esposible eliminar un país o no
  eliminar(data){
    this.idpais= data;
    if(this.idpais!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._paisservice.existepais(this.idpais)//petición para hacer la consulta si un país se pued eliminar
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                swal({
                  type: 'error',
                  title: 'No se puede eliminar este país',
                  text: 'Tiene departamentos asignados',
                  /*footer: '<a href>Why do I have this issue?</a>'*/
                })
              }else{
                this.eliminaridpais(this.idpais);//se llama aal metodo eliminar
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
      alert("Error al elegir el pais");
    }
  }

  //metodo eliminar
  eliminaridpais(idpais){
    let bn=this;
    bn._paisservice.eliminarpais(idpais)//petición al servicio para enviar el dato a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este país");
            }else{
              swal({
                type: 'success',
                title: 'Datos borrados correctamente',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
              location.reload();//se redireciona la vista
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
