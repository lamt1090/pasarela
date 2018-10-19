import { Component, OnInit } from '@angular/core';
import { SubcategoriaModule } from '../../modelos/subcategoria/subcategoria.module';
import { SubcategoriaService } from '../../servicios/subcategoria.service';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css'],
  providers: [SubcategoriaService]
})
export class SubcategoriaComponent implements OnInit {
  scategoria: any[];
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

  onsubmit(){
    let vm = this;
    vm._subcategoriaservice.addsubcategoria(vm.subcategoria)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
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
            this.scategoria=result;
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
