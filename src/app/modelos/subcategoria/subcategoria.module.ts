import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SubcategoriaModule { 
  constructor(
    public nombre: String,
    public categoria: String
  ){}
}
