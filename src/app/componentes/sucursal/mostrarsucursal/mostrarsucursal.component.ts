import { Component, OnInit } from '@angular/core';
import { MostrarsucursalService } from '../../../servicios/mostrarsucursal.service';
import { Router } from '@angular/router';
import { SucursalService } from '../../../servicios/sucursal.service';

@Component({
  selector: 'app-mostrarsucursal',
  templateUrl: './mostrarsucursal.component.html',
  styleUrls: ['./mostrarsucursal.component.css']
})
export class MostrarsucursalComponent implements OnInit {

  model:any = {}; //variable para guardar la consulta
  sidata: any = {}; // variable para guardar los datos del servicio 
  idsucu: any; // variable para saber la selección
  sucursalid: any[]; //variable para guardar los datos a editar
  data: any;

  constructor(
    private rt: Router, 
    private _sucursalservice: SucursalService, //objeto para acceder al servicio
    private mostrar: MostrarsucursalService, //objeto para acceder al servicio mostrar
  ) { }

  ngOnInit() {
    this.sidata = this.mostrar.getsucu(); //se estrae los datos que se guardaron el ser servicio 
    this.model=this.sidata; //se guardan para mostrarlos  en el formulario
  }

  //metodo para editar los registros
  modificar(data){
    this.idsucu= data;
    if(this.idsucu!=0){
      this.idbn(this.idsucu);//se llama al metodo que va a reallizar la modificación
    }else{
      alert("Error al elegir sucursal");
    }
  }

  idbn(idsucu){
    let bn=this;
    bn._sucursalservice.getsucursalid(idsucu)//petición al servicio para ir al metodo de los datos 
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hat datos para esta opción");
            }else{
              this.sucursalid=this.data; //se reciben los datos traidos de la consulta
              this.mostrar.set(this.sucursalid); //se envia para que se guarde en el servico
              this.rt.navigateByUrl('editarsucursal'); //se redirecciona a otra vista
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

  //metodo para regresar a la vista anterior
  regresar(){
    this.rt.navigateByUrl('sucursal'); 
  }

  //metodo para eliminar una sucursal
  eliminar(data){
    this.idsucu= data;
    if(this.idsucu!=0){
      if(confirm("seguro")== true){
        let cat =this;
        cat._sucursalservice.existesucursal(this.idsucu)//petición al servicio para ir al metodo y saber si esta asociado en otra tabla
        .subscribe(
          result => {
            if(result.code != 200){
              this.data=JSON.parse(result);
              
              if(this.data['status']== true){
                alert("No se puede eliminar esta sucursal, tiene asignada una caja");
              }else{
                this.eliminaridsucursal(this.idsucu); //se llama el metodo que va a eliminar el rgistro
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
      alert("Error al elegir la sucursal");
    }
  }

  eliminaridsucursal(idsucu){
    let bn=this;
    bn._sucursalservice.eliminarsucursal(idsucu)//petición al servicio para ir al metodo y eliminar el registro
    .subscribe(
      result => {
          if(result.code != 200){
            
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No se puede eliminar esta sucursal");
            }else{
              alert("los datos se han borrado correctamente");
              this.rt.navigateByUrl('sucursal'); //se redirecciona a otra vista
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
