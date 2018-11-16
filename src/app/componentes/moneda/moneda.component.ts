import { Component, OnInit } from '@angular/core';
import { MonedaModule } from '../../modelos/moneda/moneda.module';
import { MonedaService } from '../../servicios/moneda.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css'],
  providers: [MonedaService]
})
export class MonedaComponent implements OnInit {
  
  public moneda: MonedaModule;//objeto de conexión con el modelo

  constructor(
    private _monedaservice: MonedaService// objeto de conexión al servicio
  ) { 
    this.moneda= new MonedaModule("","");
  }

  ngOnInit() {
  }

  //metodo para insertar
  onsubmit(formmoneda: NgForm){
    let vm = this;

    vm._monedaservice.addmoneda(vm.moneda)//petición al servico para enviar los datos a insertar
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formmoneda.reset();//se resetea el formulario
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
