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

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrarregimenService,
    private _regimenservice: RegimenService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._regimenservice.editregimen(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/regimen');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarregimen:NgForm){
    formeditarregimen.reset();
      this.rt.navigateByUrl('/regimen');
  }

}
