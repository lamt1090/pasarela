import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DeduccionModule {
  constructor(
    public nombre: String,
    public valor: String
  ){}
 }