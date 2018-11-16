import { Component, OnInit } from '@angular/core';
import { IvaModule } from '../../modelos/iva/iva.module';
import { IvaService } from '../../servicios/iva.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-iva',
  templateUrl: './iva.component.html',
  styleUrls: ['./iva.component.css'],
  providers: [IvaService]
})
export class IvaComponent implements OnInit {
  
  public iva: IvaModule;//objeto de conexión con el modelo

  constructor(
    private _ivaservice: IvaService//objeto de conexión con el servicio
  ) { 
    this.iva= new IvaModule("");
  }

  ngOnInit() {
  }

  //metodo para insrtar
  onsubmit(formiva: NgForm){
    let vm = this;

    vm._ivaservice.addiva(vm.iva)//petición al servicio para enviar los datos a insertar
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formiva.reset();//se resetea el formulario
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
