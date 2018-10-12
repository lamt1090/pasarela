import { Component, OnInit } from '@angular/core';
import { DeduccionModule } from '../../modelos/deduccion/deduccion.module';
import { DeduccionService } from '../../servicios/deduccion.service';

@Component({
  selector: 'app-deduccion',
  templateUrl: './deduccion.component.html',
  styleUrls: ['./deduccion.component.css'],
  providers: [DeduccionService]
})
export class DeduccionComponent implements OnInit {
  
  public deduccion: DeduccionModule;

  constructor(
    private _deduccionservice: DeduccionService
  ) {
    this.deduccion = new DeduccionModule("", "");
   }

  ngOnInit() {
  }

  onsubmit(){
    let vm = this;
    vm._deduccionservice.adddeduccion(vm.deduccion)
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
