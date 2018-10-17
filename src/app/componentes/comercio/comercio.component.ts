import { Component, OnInit } from '@angular/core';
import { ComercioModule } from '../../modelos/comercio/comercio.module';
import { ComercioService } from '../../servicios/comercio.service';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css'],
  providers: [ComercioService]
})
export class ComercioComponent implements OnInit {

  public comercio: ComercioModule;

  constructor(
    private _comercioservice: ComercioService
  ) { 
    this.comercio = new ComercioModule("","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  }

  ngOnInit() {
  }

  onsubmit(){
    let vm = this;
    vm._comercioservice.addcomercio(vm.comercio)
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
