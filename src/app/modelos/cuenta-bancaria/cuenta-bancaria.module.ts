import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CuentaBancariaModule {
  constructor(
    public numero: String,
    public nombre: String,
    public comercio: String
    ){}
 }
