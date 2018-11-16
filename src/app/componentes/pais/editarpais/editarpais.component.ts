import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarpaisService } from '../../../servicios/mostrarpais.service';
import { PaisService } from '../../../servicios/pais.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editarpais',
  templateUrl: './editarpais.component.html',
  styleUrls: ['./editarpais.component.css']
})
export class EditarpaisComponent implements OnInit {

  model:any = {};//variable para guardar los datos del mostrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrarpaisService, //objeto de conexión con el mostrar
    private _paisservice: PaisService //objeto de conexión con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos del mostrar
    this.model=sidata[0];//se guardan en la variable los datos extraidos
  }

  //metodo para editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._paisservice.editpais(vm.model)//petición al servico para enviar los datos a editar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos actualizados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        this.rt.navigateByUrl('/pais');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar la edición
  cancelar(formeditarpais:NgForm){
    formeditarpais.reset();//se resetean el formualrio
      this.rt.navigateByUrl('/pais');//se redirecciona la vista
  }

}
