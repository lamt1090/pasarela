import { Component, OnInit } from '@angular/core';
import { CiudadModule } from '../../modelos/ciudad/ciudad.module';
import { CiudadService } from '../../servicios/ciudad.service';


@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
  providers: [CiudadService]
})
export class CiudadComponent implements OnInit {
  
  public ciudad : CiudadModule;

  constructor(
    private _ciudadservice: CiudadService
  ) {
    this.ciudad = new CiudadModule("","");
   }

  ngOnInit() {
  }

  onsubmit(){
    let vm = this;
    vm._ciudadservice.addciudad(vm.ciudad)
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
