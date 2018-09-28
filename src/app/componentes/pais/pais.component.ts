import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  data = String;
  constructor() { }

  ngOnInit() {
  }

    buscar():void{
      console.log(this.data);
    }
}
