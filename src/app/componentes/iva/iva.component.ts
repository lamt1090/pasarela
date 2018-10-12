import { Component, OnInit } from '@angular/core';
import { IvaModule } from '../../modelos/iva/iva.module';
import { IvaService } from '../../servicios/iva.service';


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

  onsubmit(){
    let vm = this;

    vm._ivaservice.addiva(vm.iva)
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
