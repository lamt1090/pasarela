import { Component, OnInit } from '@angular/core';
import { DeduccionModule } from '../../modelos/deduccion/deduccion.module';
import { DeduccionService } from '../../servicios/deduccion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deduccion',
  templateUrl: './deduccion.component.html',
  styleUrls: ['./deduccion.component.css'],
  providers: [DeduccionService]
})
export class DeduccionComponent implements OnInit {
  
  public deduccion: DeduccionModule; //objeto de conexión con el modelo

  constructor(
    private _deduccionservice: DeduccionService //objeto de coneción con el servicio
  ) {
    this.deduccion = new DeduccionModule("", "");
   }

  ngOnInit() {
  }

  //metodo para insertar
  onsubmit(formdeduccion: NgForm){
    let vm = this;
    vm._deduccionservice.adddeduccion(vm.deduccion)//petición para enviar los datos a insertar
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formdeduccion.reset();//se resetea el formulario
        
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
