import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CiudadModule {
  constructor(
    //campos utilizados en el formulario html y declarados en el componente
  public nombre: String,
  public dep: String,
  public npais: string,
  ){}
 }
