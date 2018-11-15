import { Component, OnInit } from '@angular/core';
import { RegimenModule } from '../../modelos/regimen/regimen.module';
import { RegimenService } from '../../servicios/regimen.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regimen',
  templateUrl: './regimen.component.html',
  styleUrls: ['./regimen.component.css'],
  providers: [RegimenService]
})
export class RegimenComponent implements OnInit {
  
  public regimen: RegimenModule; //objeto de conexión con el modelo

  constructor(
    private _regimenservice: RegimenService //objeto de conexión con el servicio
  ) {
    this.regimen = new RegimenModule("");
   }

  ngOnInit() {
  }

  //metodo para insertar
  onsubmit(formregimen: NgForm){
    let vm = this;
    vm._regimenservice.addregimen(vm.regimen)//petición al servicio para enviar los datos a registrar
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formregimen.reset();//se resetea el formualrio
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
