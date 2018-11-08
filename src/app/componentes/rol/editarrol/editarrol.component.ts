import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarrolesService } from '../../../servicios/mostrarroles.service';
import { RolService } from '../../../servicios/rol.service';

@Component({
  selector: 'app-editarrol',
  templateUrl: './editarrol.component.html',
  styleUrls: ['./editarrol.component.css']
})
export class EditarrolComponent implements OnInit {

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrarrolesService,
    private _rolservice: RolService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._rolservice.editrol(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/rol');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarrol:NgForm){
    formeditarrol.reset();
      this.rt.navigateByUrl('/rol');
  }

}
