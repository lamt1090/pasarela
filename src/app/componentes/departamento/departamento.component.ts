import { Component, OnInit } from '@angular/core';
import { DepartamentoModule } from '../../modelos/departamento/departamento.module';
import { DepartamentoService } from '../../servicios/departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers: [DepartamentoService]
})
export class DepartamentoComponent implements OnInit {

  public departamento: DepartamentoModule;

  constructor(
    private _departamentoservice: DepartamentoService
  ) { 
    this.departamento = new DepartamentoModule("","");
  }

  ngOnInit() {
  }

  onsubmit(){
    let vm = this;
    vm._departamentoservice.adddepartamento(vm.departamento)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      } 
    )
  }

}
