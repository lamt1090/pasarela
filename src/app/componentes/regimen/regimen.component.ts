import { Component, OnInit } from '@angular/core';
import { RegimenModule } from '../../modelos/regimen/regimen.module';


@Component({
  selector: 'app-regimen',
  templateUrl: './regimen.component.html',
  styleUrls: ['./regimen.component.css']
})
export class RegimenComponent implements OnInit {
  
  public regimen: RegimenModule;

  constructor() {
    this.regimen = new RegimenModule("");
   }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.regimen);
  }

}
