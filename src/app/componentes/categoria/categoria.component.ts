import { Component, OnInit } from '@angular/core';
import { CategoriaModule } from '../../modelos/categoria/categoria.module';
import { CategoriaService } from '../../servicios/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [CategoriaService]
})
export class CategoriaComponent implements OnInit {
  
  public categoria: CategoriaModule;

  constructor(
    private _categoriaservice: CategoriaService
  ) {
    this.categoria= new CategoriaModule("");
   }

  ngOnInit() {
  }

  onsubmit(){
    let vm = this;

    vm._categoriaservice.addcategoria(vm.categoria)
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
