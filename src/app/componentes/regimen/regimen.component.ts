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
  
  public regimen: RegimenModule;

  constructor(
    private _regimenservice: RegimenService
  ) {
    this.regimen = new RegimenModule("");
   }

  ngOnInit() {
  }

  onsubmit(formregimen: NgForm){
    let vm = this;
    vm._regimenservice.addregimen(vm.regimen)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formregimen.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
