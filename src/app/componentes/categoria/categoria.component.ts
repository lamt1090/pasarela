import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  datanombre = String;
  constructor() { }

  ngOnInit() {
  }

  buscar():void{
    console.log(this.datanombre);
  }
}
