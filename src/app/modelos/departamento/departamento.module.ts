import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DepartamentoModule { 
  constructor(
    //campos utilizados en el formulario html y declarados en el componente
    public npais: String,
    public nombre: String
  ){}
}
