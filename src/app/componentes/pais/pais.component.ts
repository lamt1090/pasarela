import { Component, OnInit } from '@angular/core';
import { PaisModule } from '../../modelos/pais/pais.module';
import { PaisService } from '../../servicios/pais.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers: [PaisService]
})
export class PaisComponent implements OnInit {
  
  public pais: PaisModule;

  constructor(
    private _paisservice: PaisService
  ) { 
    this.pais= new PaisModule("");
  }

  ngOnInit() {
  }

  onsubmit(formpais: NgForm){
      let vm = this;
    vm._paisservice.addpais(vm.pais)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formpais.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }
}
