import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MonedaService } from '../../../servicios/moneda.service';
import { MostrarmonedasService } from '../../../servicios/mostrarmonedas.service';

@Component({
  selector: 'app-editarmoneda',
  templateUrl: './editarmoneda.component.html',
  styleUrls: ['./editarmoneda.component.css']
})
export class EditarmonedaComponent implements OnInit {

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrarmonedasService,
    private _monedaservice: MonedaService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._monedaservice.editmoneda(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/moneda');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarmoneda:NgForm){
    formeditarmoneda.reset();
      this.rt.navigateByUrl('/moneda');
  }

}
