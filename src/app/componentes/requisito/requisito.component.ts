import { Component, OnInit } from '@angular/core';
import { RequisitoModule } from '../../modelos/requisito/requisito.module';
import { RequisitoService } from '../../servicios/requisito.service';

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

  onsubmit(){
    let vm = this;
    vm._requisitoservice.addrequisito(vm.requisito)
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
