import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarsubcategoriaService } from '../../../servicios/mostrarsubcategoria.service';
import { SubcategoriaService } from '../../../servicios/subcategoria.service';

@Component({
  selector: 'app-editarsubcategoria',
  templateUrl: './editarsubcategoria.component.html',
  styleUrls: ['./editarsubcategoria.component.css']
})
export class EditarsubcategoriaComponent implements OnInit {

  model:any = {};
  scategoria: any[];
  data: any;

  constructor(
    public rt : Router,
    private mostrar: MostrarsubcategoriaService,
    private _subcategoriaservice: SubcategoriaService
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();
    this.model=sidata[0];
    this.categorias();
  }

  onsubmit(f:NgForm){
    let vm = this;
    vm._subcategoriaservice.editsubcategoria(vm.model)
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/subcategoria');
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  cancelar(formeditarsubcategoria:NgForm){
    formeditarsubcategoria.reset();
      this.rt.navigateByUrl('/subcategoria');
  }

  categorias(){
    let cate=this;
    cate._subcategoriaservice.getcategorias()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.scategoria=result;
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
