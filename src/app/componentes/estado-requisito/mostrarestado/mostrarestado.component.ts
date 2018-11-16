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

  sestado: any[];//variable para guardar los estados de la BD
  ider: any; //varibale para guardar la selección realizada en el formulario
  estadoid: any[];//variable para guardar los datos de un estado en especifico
  data: any;
  constructor(
    private rt: Router,
    private _merservice: MostrarestadosrequisitosService, //objeto deconexión con el mostrar
    private _estadoservice: EstadoRequisitoService //objeto de conexión para el servicio
  ) { 
    this.mostrar();//inicialización del metodo
  }

  ngOnInit() {
  }

  //moetodo para mostrar 
  mostrar(){
    let er=this;
    er._estadoservice.getestado() //petición al servicio para obtener los estados de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sestado=this.data;//se guardan los datos obtenidos en la variable
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

  //metodo para saber que estado se va a editar
  modificar(data){
    this.ider= data;
    if(this.ider!=0){
      this.idbn(this.ider);//llamada al metodo para modificar
    }else{
      alert("Error al elegir estado de un requisito");
    }
  }

  //metodo modificar
  idbn(ider){
    let bn=this;
    bn._estadoservice.getestadoid(ider)//petición al servicio para obtener los datos del estado a editar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.estadoid=this.data; // se obtienen los datos de la consulta
              this._merservice.set(this.estadoid);//se envia al mostrar para guardarlo
              this.rt.navigateByUrl('editarestadorequisito');//se redirecciona a otra vista
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

  //metodo para actuaizar 
  actualizar(){
    location.reload();//se recarga la página
  }

  //metodo parar saber el estado a eliminar
  eliminar(data){
    this.ider= data;
    if(this.ider!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._estadoservice.existeestado(this.ider)//petición al servicio para saber si es posible eliminar el estado
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar este estado, esta siendo utilizado en la tabla validar estado");
              }else{
                this.eliminaridestado(this.ider);//llamda al metodo para eliminar
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
      alert("Error al elegir estado");
    }
  }

  //metodo eliminar
  eliminaridestado(ider){
    let bn=this;
    bn._estadoservice.eliminarestado(ider)//petición al servicio para enviar el dato a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar este estado");
            }else{
              alert("los datos se han borrado correctamente");
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
