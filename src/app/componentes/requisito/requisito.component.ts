import { Component, OnInit } from '@angular/core';
import { RequisitoModule } from '../../modelos/requisito/requisito.module';
import { RequisitoService } from '../../servicios/requisito.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.component.html',
  styleUrls: ['./requisito.component.css'],
  providers: [RequisitoService]
})
export class RequisitoComponent implements OnInit {
  
  public requisito: RequisitoModule;

  constructor(
    private _requisitoservice: RequisitoService
  ) {
    this.requisito= new RequisitoModule("");
   }

  ngOnInit() {
  }

  onsubmit(formrequisito: NgForm){
    let vm = this;
    vm._requisitoservice.addrequisito(vm.requisito)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formrequisito.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

}
