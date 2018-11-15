import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegimenService } from '../../../servicios/regimen.service';
import { MostrarregimenService } from '../../../servicios/mostrarregimen.service';

@Component({
  selector: 'app-editarregimen',
  templateUrl: './editarregimen.component.html',
  styleUrls: ['./editarregimen.component.css']
})
export class EditarregimenComponent implements OnInit {

  model:any = {};//variable para guardar lo extraido del mostrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrarregimenService, //objeto de conexión al mostrar
    private _regimenservice: RegimenService //objeto de conexión al servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se obtienen los datos del mostrar
    this.model=sidata[0];//se guardan los datos en la variable
  }

  //metodo para enviar los datos a editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._regimenservice.editregimen(vm.model)//petición al servicio para enviar los datos a editar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/regimen');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar 
  cancelar(formeditarregimen:NgForm){
    formeditarregimen.reset();//se resetea el formulario
      this.rt.navigateByUrl('/regimen');//se redirecciona la vista
  }

}
