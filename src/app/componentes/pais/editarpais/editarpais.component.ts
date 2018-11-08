import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarpaisService } from '../../../servicios/mostrarpais.service';
import { PaisService } from '../../../servicios/pais.service';

@Component({
  selector: 'app-editarpais',
  templateUrl: './editarpais.component.html',
  styleUrls: ['./editarpais.component.css']
})
export class EditarpaisComponent implements OnInit {

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrarpaisService,
    private _paisservice: PaisService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._paisservice.editpais(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/pais');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarpais:NgForm){
    formeditarpais.reset();
      this.rt.navigateByUrl('/pais');
  }

}
