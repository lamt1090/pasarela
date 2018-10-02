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
  public nombre: String,
  public dep: String
  ){}
 }
