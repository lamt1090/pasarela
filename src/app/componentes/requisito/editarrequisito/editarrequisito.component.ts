import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { RequisitoService } from '../../../servicios/requisito.service';
import { MostrarrequisitoService } from '../../../servicios/mostrarrequisito.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editarrequisito',
  templateUrl: './editarrequisito.component.html',
  styleUrls: ['./editarrequisito.component.css']
})
export class EditarrequisitoComponent implements OnInit {

  model:any = {};//variable para guardar los datos obtenidos
 
  constructor(
    public rt : Router,
    private mostrar: MostrarrequisitoService, //objeto de conexión con mostrar
    private _requisitoservice: RequisitoService//objeto de conexión con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extrae los datos del mostrar
    this.model=sidata[0];//se guardan en la variable
  }

  //metodo para editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._requisitoservice.editrequisito(vm.model)//petición al servicio para enviar los datos a modificar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos actualizados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        this.rt.navigateByUrl('/requisitos');//redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar la modificación
  cancelar(formeditarrequisito:NgForm){
    formeditarrequisito.reset();//se resetea el formulario
      this.rt.navigateByUrl('/requisitos');//redirecciona la vista
  }

}
