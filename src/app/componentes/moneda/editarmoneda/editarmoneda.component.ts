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

  model:any = {};//variable para guardar los datos obtenidos del mostrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrarmonedasService,//objeto de conexión con el mostrar
    private _monedaservice: MonedaService //objeto de conexión con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos del mostrar
    this.model=sidata[0];//se guardan los datos obtenidos
  }

  //metodo para editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._monedaservice.editmoneda(vm.model)//petición al servicio para enviar los datos a editar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/moneda');//se redirecciona a otra vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo cancelar el editar
  cancelar(formeditarmoneda:NgForm){
    formeditarmoneda.reset();//se resetea el formulario
      this.rt.navigateByUrl('/moneda');//se redirecciona a otra vista
  }

}
