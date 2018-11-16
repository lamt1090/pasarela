import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../../servicios/banco.service';
import { BancoModule } from '../../../modelos/banco/banco.module';
import { Router } from '@angular/router';
import { MostrarbancoService } from '../../../servicios/mostrarbanco.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-mostrarbanco',
  templateUrl: './mostrarbanco.component.html',
  styleUrls: ['./mostrarbanco.component.css']
})
export class MostrarbancoComponent implements OnInit {

  sbanco: any[];//variable para guardar los banco de la BD
  idb: any;//variable para saber la selección del formulario
  bancoid: any[];//variable para guardar datos de un banco especifico
  data: any;
  public banco: BancoModule;

  constructor(
    private rt: Router,
    private _mbservice: MostrarbancoService,//objeto de conexión cone l mostrar 
    private _bancoservice: BancoService//objeto de conexión con el servicio
  ) {
    this.mostrar();//inicialización del metodo
   }

  ngOnInit() {
  }

  //metodo para mostrar
  mostrar(){
    let cate=this;
    cate._bancoservice.getbancos()//petición al servicio apra obtener los banco de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
            
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No existen datos en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sbanco=this.data;//se guardan los datos obtenidos en la consulta
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

  //metodo para saber que banco va a modificar
  modificar(data){
    this.idb= data;
    if(this.idb!=0){
      this.idbn(this.idb);//llamado del metodo modificar
    }else{
      alert("Error al elegir el banco");
    }
  }

  //metodo modificar
  idbn(idb){
    let bn=this;
    bn._bancoservice.getbancoid(idb)//petición al servicio para obtener los datos del bancoa  editar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay datos para esta opción',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.bancoid=this.data; //se obtienen los datos de la consulta
              this._mbservice.set(this.bancoid); //se envian al mostrar para guardarlos
              this.rt.navigateByUrl('editarbanco'); //se redirecciona a otra vista
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

  //metodo par actualizar
  actualizar(){
    location.reload();//se recarga la página
  }

  //metodo para saber que banco se va a eliminar
  eliminar(data){
    this.idb= data;
    if(this.idb!=0){
      if(confirm("seguro")== true){
        this.eliminaridbn(this.idb);//llamado del metodo para eliminar
      }
    }else{
      alert("Error al elegir el banco");
    }
  }

  //metodo para eliminar
  eliminaridbn(idb){
    let bn=this;
    bn._bancoservice.eliminarbanco(idb)//petición al servicio para enviar los datos a eliminar
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay datos para esta opción");
            }else{
              swal({
                type: 'success',
                title: 'Los datos se han borrado correctaemnte',
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
