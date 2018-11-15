import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarregimenService } from '../../../servicios/mostrarregimen.service';
import { RegimenService } from '../../../servicios/regimen.service';

@Component({
  selector: 'app-mostrarregimen',
  templateUrl: './mostrarregimen.component.html',
  styleUrls: ['./mostrarregimen.component.css']
})
export class MostrarregimenComponent implements OnInit {

  sregimen: any[]; //variable para guardar los regimen de la BD
  idrg: any; //variable para saber la eleción que envian del formulario
  regimenid: any[]; //variable para guardar los datos de un regimen especifico
  data: any;

  constructor(
    private rt: Router,
    private _mrgservice: MostrarregimenService, //objeto de conexión con el mostrar
    private _regimenservice: RegimenService//objeto de conexión con el servicio
  ) { 
    this.mostrar();//inicalización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar
  mostrar(){
    let rg=this;
    rg._regimenservice.getregimen()//petición al servicio para obtener los regimen de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sregimen=this.data;//guardar los datos obtenidos en la variable
            }
          }else{
              rg = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para saber que regimen va a editar
  modificar(data){
    this.idrg= data;
    if(this.idrg!=0){
      this.idbn(this.idrg);//llamda al metodo editar
    }else{
      alert("Error al elegir regimen");
    }
  }

  //metodo editar
  idbn(idrg){
    let bn=this;
    bn._regimenservice.getregimenid(idrg)//petición al servicio para obtener los datos que se desean editar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.regimenid=this.data;//se obtien los datos 
              this._mrgservice.set(this.regimenid);//se envian la mosrtar para guarlos datos
              this.rt.navigateByUrl('editarregimen');//se redireciona la vista
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

  //metodo de actualizar
  actualizar(){
    location.reload();//se recarga la vista
  }

  //metodo para saber si se puede eliminar el regimen 
  eliminar(data){
    this.idrg= data;
    if(this.idrg!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._regimenservice.existeregimen(this.idrg)//petición al servicio para saber si el dato se puede eliminar o no
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta regimen, un comercio lo esta usando");
              }else{
                this.eliminaridregimen(this.idrg);//se llama al metodo de eliminar
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
      alert("Error al elegir el regimen");
    }
  }

  //metodo de eliminar
  eliminaridregimen(idrg){
    let bn=this;
    bn._regimenservice.eliminarregimen(idrg)//petición al servicio para enviar el dato a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este regimen");
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
