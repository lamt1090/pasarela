import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MostrarcomercioService } from '../../../servicios/mostrarcomercio.service';
import { ComercioService } from '../../../servicios/comercio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editarcomercio',
  templateUrl: './editarcomercio.component.html',
  styleUrls: ['./editarcomercio.component.css']
})
export class EditarcomercioComponent implements OnInit {

  model:any = {};
  sciudad: any[];
  data: any;

  sc: any;
  sp: any;
  scd: any;
  sregimen : any[];
  siva : any[];
  srol : any[];
  scategoria : any[];
  spais : any[];
  ssubcategoria : any[];
  sdepartamento : any[];
  
  constructor(
    public rt : Router,
    private mostrar: MostrarcomercioService,
    private _comercioservice: ComercioService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
    this.categoria();
    this.regimen();
    this.iva();
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._comercioservice.editcomercio(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/mostrarcomercio');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarcomercio:NgForm){
    formeditarcomercio.reset();
      this.rt.navigateByUrl('/mostrarcomercio');
  }

  categoria(){
    let cate=this;
    cate._comercioservice.getcategoria()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.scategoria=this.data;
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

  onSelection(){
    this.sc= this.model.catc;
    if(this.sc!=0){
      this.sb(this.sc);
    }else{
      alert("Error en la elección de categoria");
    }
  }

  sb(sc){
    let cate=this;
    cate._comercioservice.getsubcategoriaopcional(sc)
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay subcategorias para esta opción");
            }else{
              this.ssubcategoria=this.data;
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

  regimen(){
    let cate=this;
    cate._comercioservice.getregimen()
    .subscribe(
      result => {
          if(result.code != 200){

            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sregimen=result;
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

  iva(){
    let cate=this;
    cate._comercioservice.getiva()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.siva=result;
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
