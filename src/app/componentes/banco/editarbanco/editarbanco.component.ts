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

  model:any = {}; //variable para guardar los datos obtenidos del mostrar
  public banco : BancoModule;
  
  constructor(
    public rt : Router,
    private mostrar: MostrarbancoService,//objeto de conexión co el mostrar
    private _bancoservice: BancoService,//objeto de conexión con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos del guardados en el mostrar
    this.model=sidata[0]; //se guardan los datos obtenidos
  }

  //metodo para editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._bancoservice.editbanco(vm.model)//petición al servicio para enviar los datos a editar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/banco');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditarbanco:NgForm){
      formeditarbanco.reset();//se resetea el formulario
      this.rt.navigateByUrl('/banco');//se redirecciona la vista
  }

}
