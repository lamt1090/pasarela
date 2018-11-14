import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class IvaModule { 
  constructor(
    //campo utilizado en el formulario html y declarados en el componente
    public valor: String
  ){}
}
