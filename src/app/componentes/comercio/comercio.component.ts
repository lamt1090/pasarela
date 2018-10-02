import { Component, OnInit } from '@angular/core';
import { ComercioModule } from '../../modelos/comercio/comercio.module';


@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})
export class ComercioComponent implements OnInit {

  public comercio: ComercioModule;

  constructor() { 
    this.comercio = new ComercioModule("","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.comercio);
  }

}
