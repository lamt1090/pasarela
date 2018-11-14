import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CategoriaModule {
  constructor(
    //campo utilizado en el formulario html y declarados en el componente
  public nombre: String
  ){}
 }
