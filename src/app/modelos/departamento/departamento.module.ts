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
    public npais: String,
    public nombre: String
  ){}
}
