import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { RequisitoService } from '../../../servicios/requisito.service';
import { MostrarrequisitoService } from '../../../servicios/mostrarrequisito.service';

@Component({
  selector: 'app-editarrequisito',
  templateUrl: './editarrequisito.component.html',
  styleUrls: ['./editarrequisito.component.css']
})
export class EditarrequisitoComponent implements OnInit {

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrarrequisitoService,
    private _requisitoservice: RequisitoService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._requisitoservice.editrequisito(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/requisitos');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarrequisito:NgForm){
    formeditarrequisito.reset();
      this.rt.navigateByUrl('/requisitos');
  }

}
