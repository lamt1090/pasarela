import { Component, OnInit } from '@angular/core';
import { RequisitoModule } from '../../modelos/requisito/requisito.module';
import { RequisitoService } from '../../servicios/requisito.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.component.html',
  styleUrls: ['./requisito.component.css'],
  providers: [RequisitoService]
})
export class RequisitoComponent implements OnInit {
  
  public requisito: RequisitoModule; //objeto de conexión con el modelo

  constructor(
    private _requisitoservice: RequisitoService //objeto de conexión con el servicio 
  ) {
    this.requisito= new RequisitoModule("");
   }

  ngOnInit() {
  }

  //metodo para guardar
  onsubmit(formrequisito: NgForm){
    let vm = this;
    vm._requisitoservice.addrequisito(vm.requisito)//petición al servicio para enviar los datos a guardar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos guardados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        formrequisito.reset();//se setea el formulario
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
