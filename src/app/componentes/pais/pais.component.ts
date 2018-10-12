import { Component, OnInit } from '@angular/core';
import { PaisModule } from '../../modelos/pais/pais.module';
import { PaisService } from '../../servicios/pais.service';

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

    onsubmit(){
      let vm = this;
    vm._paisservice.addpais(vm.pais)
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
