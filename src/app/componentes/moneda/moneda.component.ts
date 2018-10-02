import { Component, OnInit } from '@angular/core';
import { MonedaModule } from '../../modelos/moneda/moneda.module';


@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent implements OnInit {
  
  public moneda: MonedaModule;

  constructor() { 
    this.moneda= new MonedaModule("");
  }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.moneda);
  }

}
