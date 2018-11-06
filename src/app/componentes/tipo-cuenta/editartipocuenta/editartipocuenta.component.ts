import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoCuentaService } from '../../../servicios/tipo-cuenta.service';
import { MostrartipocuentaService } from '../../../servicios/mostrartipocuenta.service';


@Component({
  selector: 'app-editartipocuenta',
  templateUrl: './editartipocuenta.component.html',
  styleUrls: ['./editartipocuenta.component.css']
})
export class EditartipocuentaComponent implements OnInit {

  model:any = {};
  public sidtpcuenta : any[];
 
  constructor(
    public rt : Router,
    private mostrar: MostrartipocuentaService,
    private _tpcuentaservice: TipoCuentaService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._tpcuentaservice.edittpcuenta(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/tipocuenta');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditartpcuenta:NgForm){
    formeditartpcuenta.reset();
      this.rt.navigateByUrl('/tipocuenta');
  }

}
