import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarciudadService } from '../../../servicios/mostrarciudad.service';
import { CiudadService } from '../../../servicios/ciudad.service';

@Component({
  selector: 'app-editarciudad',
  templateUrl: './editarciudad.component.html',
  styleUrls: ['./editarciudad.component.css']
})
export class EditarciudadComponent implements OnInit {

  model:any = {};
  sciudad: any[];
  spais: any[];
  sp: any;
  data: any;

  constructor(
    public rt : Router,
    private mostrar: MostrarciudadService,
    private _ciudadservice: CiudadService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
    this.pais();
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._ciudadservice.editciudad(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/ciudad');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarciudad:NgForm){
    formeditarciudad.reset();
      this.rt.navigateByUrl('/ciudad');
  }

  pais(){
    let cate=this;
    cate._ciudadservice.getpais()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.spais=this.data;
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

  onSelectionpais(){
    this.sp= this.model.npais;
    if(this.sp!=0){
      this.sd(this.sp);
    }else{
      alert("Error al elegir el país");
    }
  }

  sd(sp){
    let pais=this;
    pais._ciudadservice.getpaisopcional(sp)
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay departamento para esta opción");
            }else{
              this.sciudad=this.data;
            }
          }else{
              pais = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  /*departamentos(){
    let cate=this;
    cate._ciudadservice.getdepartamentos()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen ciudades para ese departamento")
            }else{
              this.sciudad=this.data;
            }
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }*/

}
