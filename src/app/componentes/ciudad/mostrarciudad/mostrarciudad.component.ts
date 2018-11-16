import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarciudadService } from '../../../servicios/mostrarciudad.service';
import { CiudadService } from '../../../servicios/ciudad.service';

@Component({
  selector: 'app-mostrarciudad',
  templateUrl: './mostrarciudad.component.html',
  styleUrls: ['./mostrarciudad.component.css']
})
export class MostrarciudadComponent implements OnInit {

  sciudad: any[]; //variable para guardar las ciudades de la BD
  idcd: any; //varable para saber la selección del formulario
  ciudadid: any[]; //variable para guardar una ciudad en especifico
  data: any;
  constructor(
    private rt: Router,
    private _mcdservice: MostrarciudadService, //objeto de conexión con el mostrar
    private _ciudadservice: CiudadService //objeto de conexión con el servicio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //metodo para mostrar
  mostrar(){
    let cd=this;
    cd._ciudadservice.getciudades()//petición para obtener las ciudades del al BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sciudad=this.data;//se guardan los datos obtenidos en la consulta
            }
          }else{
              cd = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  //metodo para saber que ciudad va a modificar
  modificar(data){
    this.idcd= data;
    if(this.idcd!=0){
      this.idbn(this.idcd);//lamada el metodo modificar
    }else{
      alert("Error al elegir ciudad");
    }
  }

  //metodo modifircar
  idbn(idcd){
    let bn=this;
    bn._ciudadservice.getciudadid(idcd)//petición al servicio para obtener los datos de la ciudad a editar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.ciudadid=this.data;//obtiene los datos de la consulta
              this._mcdservice.set(this.ciudadid);//envia los datos al mostrar para guardarlos
              this.rt.navigateByUrl('editarciudad');//redirecciona la vista
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
    location.reload();// recarga la vista
  }

  //metodo para saber que ciudad se va a eliminar
  eliminar(data){
    this.idcd= data;
    if(this.idcd!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._ciudadservice.existeciudad(this.idcd)//petición al servicio para saber si se la ciuadad se puede eliminar
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta ciudad, esta asignada en una sucursal");
              }else{
                this.eliminaridciudad(this.idcd);//llamada al metodo eliminar
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
      alert("Error al elegir la ciudad");
    }
  }

  //metodo eliminar
  eliminaridciudad(idcd){
    let bn=this;
    bn._ciudadservice.eliminarciudad(idcd)//petición al servicio para enviar los datos a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta ciudad");
            }else{
              alert("los datos se han borrado correctamente");
              location.reload();//recargar la vista
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
