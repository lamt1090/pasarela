import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  datanombre= String;
  dataselect= {};
  constructor() { }

  ngOnInit() {
  }

  buscar():void{
    console.log(this.datanombre);
    console.log(this.dataselect);
  }

}
