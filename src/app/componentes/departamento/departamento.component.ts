import { Component, OnInit } from '@angular/core';
import { DepartamentoModule } from '../../modelos/departamento/departamento.module';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  public departamento: DepartamentoModule;

  constructor() { 
    this.departamento = new DepartamentoModule("","");
  }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.departamento);
  }

}
