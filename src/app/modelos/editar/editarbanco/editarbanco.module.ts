import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class EditarbancoModule { 
  constructor(
    public id: string,
    public nombre: String
  ){}
}
