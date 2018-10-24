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
  
  public iva: IvaModule;

  constructor(
    private _ivaservice: IvaService
  ) { 
    this.iva= new IvaModule("");
  }

  ngOnInit() {
  }

  onsubmit(formiva: NgForm){
    let vm = this;

    vm._ivaservice.addiva(vm.iva)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formiva.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
