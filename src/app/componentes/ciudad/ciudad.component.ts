import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  dataname = String;
  datasel = {};
  constructor() { }

  ngOnInit() {
  }

  buscar():void{
    console.log(this.dataname);
    console.log(this.datasel);
  }
}
