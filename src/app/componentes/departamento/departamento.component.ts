import { Component, OnInit } from '@angular/core';
import { DepartamentoModule } from '../../modelos/departamento/departamento.module';
import { DepartamentoService } from '../../servicios/departamento.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers: [DepartamentoService]
})
export class DepartamentoComponent implements OnInit {
  pais: any[];
  data: any[];
  public departamento: DepartamentoModule;

  constructor(
    private _departamentoservice: DepartamentoService
  ) { 
    
    this.departamento = new DepartamentoModule("","");
  }

  ngOnInit() {
    this.paises();
  }

  onsubmit(formdepartamento: NgForm){
    let vm = this;
    vm._departamentoservice.adddepartamento(vm.departamento)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formdepartamento.reset();
        
      },
      err =>{
        alert("Error al guardar en la base de datos")
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
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.pais=result;
            }
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
