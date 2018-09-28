import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
 data_nombre = {};
 data_selsucursal = [];
  constructor() { }

  ngOnInit() {
  }

  buscar():void{
    console.log(this.data_nombre);
  }
  

}
