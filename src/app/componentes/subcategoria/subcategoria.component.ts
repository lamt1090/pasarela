import { Component, OnInit } from '@angular/core';
import { SubcategoriaModule } from '../../modelos/subcategoria/subcategoria.module';
import { SubcategoriaService } from '../../servicios/subcategoria.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css'],
  providers: [SubcategoriaService]
})
export class SubcategoriaComponent implements OnInit {
  scategoria: any[];
  data: any[];
  public subcategoria: SubcategoriaModule;

  constructor(
    private _subcategoriaservice: SubcategoriaService
  ) {
    this.categorias();
    this.subcategoria = new SubcategoriaModule("","");
   }

  ngOnInit() {
    //this._subcategoriaservice.getcategorias();
    //this.categorias();
  }

  onsubmit(formsubcategoria: NgForm){
    let vm = this;
    vm._subcategoriaservice.addsubcategoria(vm.subcategoria)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formsubcategoria.reset();
  
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
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
