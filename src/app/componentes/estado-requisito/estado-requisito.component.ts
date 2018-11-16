import { Component, OnInit } from '@angular/core';
import { EstadoRequisitoModule } from '../../modelos/estado-requisito/estado-requisito.module';
import { EstadoRequisitoService } from '../../servicios/estado-requisito.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-estado-requisito',
  templateUrl: './estado-requisito.component.html',
  styleUrls: ['./estado-requisito.component.css'],
  providers: [EstadoRequisitoService]
})
export class EstadoRequisitoComponent implements OnInit {
  
  public estadorequisito: EstadoRequisitoModule;//objeto de conexión con el modelo

  constructor(
    private _estadorequisitoservice: EstadoRequisitoService //objeto de conexión con el mostrar 
  ) {
    this.estadorequisito= new EstadoRequisitoModule(""); //objeto de conexión al servicio
   }

  ngOnInit() {
  }

  //metodo para insertar
  onsubmit(formestadorequisito: NgForm){
    let vm = this;

    vm._estadorequisitoservice.addestado(vm.estadorequisito)//petición al servicio para enviar los datos a insertar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos guardados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        formestadorequisito.reset();//se resetea el formulario
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
