import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ValidarRequisitosModule {
  constructor(
    public nrequisito: String,
    public ncomercio: String,
    public vestado: String,
    public fecha: String,
    public archivo: String 
  ){}
 }
