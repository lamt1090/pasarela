import { Component, OnInit } from '@angular/core';
import { IvaModule } from '../../modelos/iva/iva.module';


@Component({
  selector: 'app-iva',
  templateUrl: './iva.component.html',
  styleUrls: ['./iva.component.css']
})
export class IvaComponent implements OnInit {
  
  public iva: IvaModule;

  constructor() { 
    this.iva= new IvaModule("");
  }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.iva);
  }

}
