import { Component, OnInit } from '@angular/core';
import { RegimenModule } from '../../modelos/regimen/regimen.module';
import { RequisitoModule } from '../../modelos/requisito/requisito.module';


@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.component.html',
  styleUrls: ['./requisito.component.css']
})
export class RequisitoComponent implements OnInit {
  
  public requisito: RequisitoModule;

  constructor() {
    this.requisito= new RequisitoModule("");
   }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.requisito);
  }

}
