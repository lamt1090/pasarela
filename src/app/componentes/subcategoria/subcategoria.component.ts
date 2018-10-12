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

}
