import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarrepresentantelegalService } from '../../../servicios/mostrarrepresentantelegal.service';
import { RepresentanteLegalService } from '../../../servicios/representante-legal.service';


@Component({
  selector: 'app-editarrepresentantelegal',
  templateUrl: './editarrepresentantelegal.component.html',
  styleUrls: ['./editarrepresentantelegal.component.css']
})
export class EditarrepresentantelegalComponent implements OnInit {

  model:any = {};//variable para guardar los estraido del mostrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrarrepresentantelegalService, //objeto de conexión con el mostrar
    private _replegalservice: RepresentanteLegalService // objeto de conexión con el servicio 
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se obtinen los datos del mostrar
    this.model=sidata[0];//se guardan los datos en la variable
  }

  //metodo para editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._replegalservice.editrepresentantelegal(vm.model)//petición al servicio par aenviar los datos a editar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/mostrarrepresentantelegal');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar 
  cancelar(formeditarrepresentante:NgForm){
    formeditarrepresentante.reset();//se reseta el formulario
      this.rt.navigateByUrl('/mostrarrepresentantelegal');//se redirecciona la vista
  }

}
