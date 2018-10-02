import { Component, OnInit } from '@angular/core';
import { SubcategoriaModule } from '../../modelos/subcategoria/subcategoria.module';


@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css']
})
export class SubcategoriaComponent implements OnInit {
  
  public subcategoria: SubcategoriaModule;

  constructor() {
    this.subcategoria = new SubcategoriaModule("","");
   }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.subcategoria);
  }

}
