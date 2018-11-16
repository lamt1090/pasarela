import { Component, OnInit } from '@angular/core';
import { RolModule } from '../../modelos/rol/rol.module';
import { RolService } from '../../servicios/rol.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService]
})
export class RolComponent implements OnInit {
  
  public rol: RolModule; //objeto del modelo

  constructor(
    private _rolservice: RolService// objeto del servico
  ) {
    this.rol= new RolModule("");
   }

  ngOnInit() {
  }

  //metodo pasa insertar a la BD
  onsubmit(formrol: NgForm){
      let vm = this;
    vm._rolservice.addrol(vm.rol)//petición al sevicio para enciar los datos a insertar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos guardados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        formrol.reset();//reseteo del formulario
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }
}
