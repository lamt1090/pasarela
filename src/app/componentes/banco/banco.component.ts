import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {
  data  = {};
  constructor() { }

  ngOnInit() {
    //this.data= '';
  }

  buscar():void{
    console.log(this.data);
  }
}
