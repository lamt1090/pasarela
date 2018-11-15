import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarsucursalService } from '../../../servicios/mostrarsucursal.service';
import { SucursalService } from '../../../servicios/sucursal.service';


@Component({
  selector: 'app-editarsucursal',
  templateUrl: './editarsucursal.component.html',
  styleUrls: ['./editarsucursal.component.css']
})
export class EditarsucursalComponent implements OnInit {

  model:any = {};//variable para guardar la consulta
  data: any;

  constructor(
    public rt : Router,
    private mostrar: MostrarsucursalService, //objeto para acceder al servicio mostrar
    private _sucursalservice: SucursalService //objeto para acceder al servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get(); //se estrae los datos que se guardaron el ser servicio 
    this.model=sidata[0]; //se guardan para mostrarlos  en el formulario
  }

  //metodo que tare los datos para hacer la modificación
  onsubmit(f:NgForm){
    let vm = this;
    vm._sucursalservice.editsucursal(vm.model)//petición al servicio para ir al metodo y editar los datos
    .subscribe(
      res => {
        if(res == true){
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/sucursal');//redireccionar vista
        }else{
          alert("error al actualizar");
        }
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar la modificación
  cancelar(formeditarsucursal:NgForm){
    formeditarsucursal.reset(); //se resetea el formulario
      this.rt.navigateByUrl('/mostrarsucursal'); //redirecciona a otra vista
  }

  

}
