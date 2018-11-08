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

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrardeduccionesService,
    private _deduccionservice: DeduccionService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._deduccionservice.editdeduccion(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/deduccion');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditardeduccion:NgForm){
    formeditardeduccion.reset();
      this.rt.navigateByUrl('/deduccion');
  }

}


