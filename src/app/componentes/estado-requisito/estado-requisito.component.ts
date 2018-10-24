import { Component, OnInit } from '@angular/core';
import { EstadoRequisitoModule } from '../../modelos/estado-requisito/estado-requisito.module';
import { EstadoRequisitoService } from '../../servicios/estado-requisito.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-estado-requisito',
  templateUrl: './estado-requisito.component.html',
  styleUrls: ['./estado-requisito.component.css'],
  providers: [EstadoRequisitoService]
})
export class EstadoRequisitoComponent implements OnInit {
  
  public estadorequisito: EstadoRequisitoModule;

  constructor(
    private _estadorequisitoservice: EstadoRequisitoService
  ) {
    this.estadorequisito= new EstadoRequisitoModule("");
   }

  ngOnInit() {
  }

  onsubmit(formestadorequisito: NgForm){
    let vm = this;

    vm._estadorequisitoservice.addestado(vm.estadorequisito)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formestadorequisito.reset();
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
