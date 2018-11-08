import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrardepartamentoService } from '../../../servicios/mostrardepartamento.service';
import { DepartamentoService } from '../../../servicios/departamento.service';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {

  model:any = {};
  sdepartamento: any[];
  data: any;

  constructor(
    public rt : Router,
    private mostrar: MostrardepartamentoService,
    private _departamentoservice: DepartamentoService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
    this.paises();
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._departamentoservice.editdepartamento(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/departamento');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditardepartamento:NgForm){
    formeditardepartamento.reset();
      this.rt.navigateByUrl('/departamento');
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
              this.sdepartamento=result;
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
