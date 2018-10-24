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
  
  public moneda: MonedaModule;

  constructor(
    private _monedaservice: MonedaService
  ) { 
    this.moneda= new MonedaModule("");
  }

  ngOnInit() {
  }

  onsubmit(formmoneda: NgForm){
    let vm = this;

    vm._monedaservice.addmoneda(vm.moneda)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formmoneda.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
