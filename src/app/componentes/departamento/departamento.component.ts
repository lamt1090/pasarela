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
  pais: any[];
  public departamento: DepartamentoModule;

  constructor(
    private _departamentoservice: DepartamentoService
  ) { 
    this.paises();
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

  paises(){
    let cate=this;
    cate._departamentoservice.getpaises()
    .subscribe(
      result => {
          if(result.code != 200){
            this.pais=result;
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

}
