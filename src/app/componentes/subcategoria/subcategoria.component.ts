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
  
  public subcategoria: SubcategoriaModule;

  constructor(
    private _subcategoriaservice: SubcategoriaService
  ) {
    this.subcategoria = new SubcategoriaModule("","");
   }

  ngOnInit() {
    this._subcategoriaservice.getcategorias();
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
    cate._subcategoriaservice.getcategorias().subscribe(
      result => {
          if(result.code != 200){
              console.log(result);
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
  );
  }

 

  countries = [{
    id: '1',
    name: 'sistemas'
   },
   {
    id: '2',
    name: 'administración'
   },
   {
    id: '3',
    name: 'finanzas'
   }];

}
