import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-representante-legal',
  templateUrl: './representante-legal.component.html',
  styleUrls: ['./representante-legal.component.css']
})
export class RepresentanteLegalComponent implements OnInit {
  datacedula = {} = '';
  dataname = {} = '';
  dataemail = {} = '';
  datacelular = {} = '';
  datatelefono = {} = '';
  constructor() { }

  ngOnInit() {
  }

  buscar():void{
    console.log(this.datacedula);
    console.log(this.dataname);
    console.log(this.dataemail);
    console.log(this.datacelular);
    console.log(this.datatelefono);
  }

}
