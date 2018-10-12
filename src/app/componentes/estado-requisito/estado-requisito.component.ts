import { Component, OnInit } from '@angular/core';
import { EstadoRequisitoModule } from '../../modelos/estado-requisito/estado-requisito.module';
import { EstadoRequisitoService } from '../../servicios/estado-requisito.service';


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

  onsubmit(){
    let vm = this;

    vm._estadorequisitoservice.addestado(vm.estadorequisito)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      } 
    )
  }

}
