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

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrarrepresentantelegalService,
    private _replegalservice: RepresentanteLegalService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._replegalservice.editrepresentantelegal(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/mostrarrepresentantelegal');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarrepresentante:NgForm){
    formeditarrepresentante.reset();
      this.rt.navigateByUrl('/mostrarrepresentantelegal');
  }

}
