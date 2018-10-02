import { Component, OnInit } from '@angular/core';
import { CategoriaModule } from '../../modelos/categoria/categoria.module';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  
  public categoria: CategoriaModule;

  constructor() {
    this.categoria= new CategoriaModule("");
   }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.categoria);
  }

  
}
