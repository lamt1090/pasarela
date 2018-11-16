import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoCuentaService } from '../../../servicios/tipo-cuenta.service';
import { MostrartipocuentaService } from '../../../servicios/mostrartipocuenta.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-editartipocuenta',
  templateUrl: './editartipocuenta.component.html',
  styleUrls: ['./editartipocuenta.component.css']
})
export class EditartipocuentaComponent implements OnInit {

  model:any = {}; //variable para obtener el dato que se va a editar
 
  constructor(
    public rt : Router,
    private mostrar: MostrartipocuentaService, //objeto para asociar el servicio mostrar
    private _tpcuentaservice: TipoCuentaService //objeto para asociar el srvicio 
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se obtienen los datos para editar
    this.model=sidata[0]; //se guardan para mostrar en el formulario
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._tpcuentaservice.edittpcuenta(vm.model)//petición al servicio para enviar los datos que se va a editar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos actualizados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        this.rt.navigateByUrl('/tipocuenta'); //nueva vista 
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditartpcuenta:NgForm){
    formeditartpcuenta.reset(); //se borrar los datos del formulario
      this.rt.navigateByUrl('/tipocuenta'); //se ubica en nueva vista
  }

}
