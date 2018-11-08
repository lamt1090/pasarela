import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BancoModule } from '../../../modelos/banco/banco.module';
import { BancoService } from '../../../servicios/banco.service';
import { Router } from '@angular/router';
import { MostrarbancoService } from '../../../servicios/mostrarbanco.service';

@Component({
  selector: 'app-editarbanco',
  templateUrl: './editarbanco.component.html',
  styleUrls: ['./editarbanco.component.css']
})
export class EditarbancoComponent implements OnInit {

  model:any = {};
  public banco : BancoModule;
  public sidbanco : any[];
  public m_editar:any[];

  constructor(
    public rt : Router,
    private mostrar: MostrarbancoService,
    private _bancoservice: BancoService,
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._bancoservice.editbanco(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/banco');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarbanco:NgForm){
      formeditarbanco.reset();
      this.rt.navigateByUrl('/banco');
  }

}
