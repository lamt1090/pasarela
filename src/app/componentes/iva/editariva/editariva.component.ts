import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IvaService } from '../../../servicios/iva.service';
import { MostrarivaService } from '../../../servicios/mostrariva.service';

@Component({
  selector: 'app-editariva',
  templateUrl: './editariva.component.html',
  styleUrls: ['./editariva.component.css']
})
export class EditarivaComponent implements OnInit {

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrarivaService,
    private _ivaservice: IvaService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._ivaservice.editiva(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/iva');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditiva:NgForm){
    formeditiva.reset();
      this.rt.navigateByUrl('/iva');
  }

}
