import { Component, OnInit } from '@angular/core';
import { PaisModule } from '../../modelos/pais/pais.module';
import { PaisService } from '../../servicios/pais.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers: [PaisService]
})
export class PaisComponent implements OnInit {
  
  public pais: PaisModule; //objeto de conexión al modelo

  constructor(
    private _paisservice: PaisService // objeto de conexión al servicio
  ) { 
    this.pais= new PaisModule("");
  }

  ngOnInit() {
  }

  //metodo para insertar
  onsubmit(formpais: NgForm){
      let vm = this;
    vm._paisservice.addpais(vm.pais)//petición al servico para eviar los datos a insertar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos guardados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        formpais.reset();//se resetea el formulario
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }
}
