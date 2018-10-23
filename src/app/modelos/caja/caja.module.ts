import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class CajaModule { 
  constructor(
    public nombre: String,
    public sucursal: String,
    public comercio: String
  ){}
}
