import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarrolesService } from '../../../servicios/mostrarroles.service';
import { RolService } from '../../../servicios/rol.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-editarrol',
  templateUrl: './editarrol.component.html',
  styleUrls: ['./editarrol.component.css']
})
export class EditarrolComponent implements OnInit {

  model:any = {}; //variable para guardar los datos obtenidos del servicio mostrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrarrolesService, //objeto de conexión con al mostrarrol
    private _rolservice: RolService // objeto de conexión al servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se obtienen los datos del servicio mostrar
    this.model=sidata[0];//se guardan los datos traidos del mostrar
  }

  //metodo para modificar
  onsubmit(f:NgForm){
    let vm = this;
    vm._rolservice.editrol(vm.model)//petición al servicio para enviar los datos a modificar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos actualizados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        this.rt.navigateByUrl('/rol');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar la modificación
  cancelar(formeditarrol:NgForm){
    formeditarrol.reset(); //se resetea el formulario
      this.rt.navigateByUrl('/rol');//se redirecciona la vista
  }

}
