import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarivaService } from '../../../servicios/mostrariva.service';
import { IvaService } from '../../../servicios/iva.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mostrariva',
  templateUrl: './mostrariva.component.html',
  styleUrls: ['./mostrariva.component.css']
})
export class MostrarivaComponent implements OnInit {

  siva: any[];//variable para guardar los ivas obtenidos de la BD
  idiva: any; //variable para saber la selección del formulario
  ivaid: any[]; //variable pára guardar los datos especificos de un iva
  data: any;
  constructor(
    private rt: Router,
    private _mivaservice: MostrarivaService, //objeto de conexión con el mostrar
    private _ivaservice: IvaService//objeto de conexión con el servicio
  ) { 
    this.mostrar();//inicalización del metodo
  }

  ngOnInit() {
  }

  //metodo apra mostrar 
  mostrar(){
    let cate=this;
    cate._ivaservice.getiva()//perición al servicio para obtener los ivas de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay Iva en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.siva=this.data;//se guardan los datos obtenidos
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

  //metodo para saber que iva modifica
  modificar(data){
    this.idiva= data;
    if(this.idiva!=0){
      this.idbn(this.idiva);//llamado al metodo modificar
    }else{
      alert("Error al elegir iva");
    }
  }

  //metodo modificar
  idbn(idiva){
    let bn=this;
    bn._ivaservice.getivaid(idiva)//petición al servicio para enviar los datos a modificar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.ivaid=this.data; //se obtienen los datos de la consulta
              this._mivaservice.set(this.ivaid);// se envian al mostrar para guardarlos
              this.rt.navigateByUrl('editariva');//se redirecciona a otra vista
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
    location.reload();//se recarga la vista
  }

  //metodo para saber que iva eliminar y si se puede eliminar
  eliminar(data){
    this.idiva= data;
    if(this.idiva!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._ivaservice.existeiva(this.idiva)//petición al servicio para buscar si es posible eliminar la elección o no
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                swal({
                  type: 'error',
                  title: 'No se puede eliminar el iva',
                  text: 'Esta asiganado a un comercio',
                  /*footer: '<a href>Why do I have this issue?</a>'*/
                })
              }else{
                this.eliminaridiva(this.idiva);//llamda al metodo eliminar
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

  //metodo eliminar
  eliminaridiva(idiva){
    let bn=this;
    bn._ivaservice.eliminariva(idiva)//petición al servicio para enviar los datos a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta categoria");
            }else{
              swal({
                type: 'success',
                title: 'Datos borrados correctamente',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
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
