import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IvaService } from '../../../servicios/iva.service';
import { MostrarivaService } from '../../../servicios/mostrariva.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-editariva',
  templateUrl: './editariva.component.html',
  styleUrls: ['./editariva.component.css']
})
export class EditarivaComponent implements OnInit {

  model:any = {};//variable para guardar los datos del mostrar
 
  constructor(
    public rt : Router,
    private mostrar: MostrarivaService,//objeto de conexión con el mostrar
    private _ivaservice: IvaService// objeto de conexión con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos del mostrar
    this.model=sidata[0];// se guardan los datos en la variable
  }

  //metodo editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._ivaservice.editiva(vm.model)//petición al servicio para enviar los datos a editar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos actualizados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        this.rt.navigateByUrl('/iva');//redirección a otra vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditiva:NgForm){
    formeditiva.reset();//reseteo del formulario
      this.rt.navigateByUrl('/iva');//redirección a otra vista
  }

}
