import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarestadosrequisitosService } from '../../../servicios/mostrarestadosrequisitos.service';
import { EstadoRequisitoService } from '../../../servicios/estado-requisito.service';

@Component({
  selector: 'app-editarestado',
  templateUrl: './editarestado.component.html',
  styleUrls: ['./editarestado.component.css']
})
export class EditarestadoComponent implements OnInit {

  model:any = {};
 
  constructor(
    public rt : Router,
    private mostrar: MostrarestadosrequisitosService,
    private _estadoservice: EstadoRequisitoService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._estadoservice.editestadorequisito(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/estadorequisito');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarestado:NgForm){
    formeditarestado.reset();
      this.rt.navigateByUrl('/estadorequisito');
  }

}
