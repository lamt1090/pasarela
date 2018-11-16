import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrardeduccionesService } from '../../../servicios/mostrardeducciones.service';
import { DeduccionService } from '../../../servicios/deduccion.service';

@Component({
  selector: 'app-editardeduccion',
  templateUrl: './editardeduccion.component.html',
  styleUrls: ['./editardeduccion.component.css']
})
export class EditardeduccionComponent implements OnInit {

  model:any = {};//varibale para guardar los datos del msotrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrardeduccionesService, //objeto de conexión al mostrar
    private _deduccionservice: DeduccionService//objeto de conexión al servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos del mostrar
    this.model=sidata[0];//se guardan los datos obtenidos
  }

  //metodo para editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._deduccionservice.editdeduccion(vm.model)//petición al servicio para enviar los datos a editar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/deduccion');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditardeduccion:NgForm){
    formeditardeduccion.reset();// se resetea el formulario
      this.rt.navigateByUrl('/deduccion');//se redirecciona la vista
  }

}


